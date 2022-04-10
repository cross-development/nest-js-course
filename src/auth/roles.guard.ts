// Core
import {
  HttpStatus,
  Injectable,
  CanActivate,
  HttpException,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
// Packages
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
// Models
import { User } from 'src/users/users.model';
// Decorators
import { ROLES_KEY } from './roles-auth.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService, private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);

      if (!requiredRoles) {
        return true;
      }

      const req = context.switchToHttp().getRequest();

      const authHeader = req.headers?.authorization as string;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException('UNAUTHORIZED');
      }

      const user = this.jwtService.verify<User>(token);
      req.user = user;

      return user.roles.some(role => requiredRoles.includes(role.value));
    } catch (error) {
      throw new HttpException('PERMISSION_DENIED', HttpStatus.FORBIDDEN);
    }
  }
}
