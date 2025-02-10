export interface AuthResponse {
    roles: Role[];
    message: string;
    fullName: string;
    username: string;
    token: string;
    uuid: string;
  }
  
  export interface Role {
    authority: string;
  }
  
  export interface AuthResponseRaw {
    Role: RoleRaw[];
    Message: string;
    "Nombre Completo": string;
    Username: string;
    Token: string;
    UUID: string;
  }
  
  export interface RoleRaw {
    authority: string;
  }