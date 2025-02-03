import { Routes } from "@nestjs/core";
import { HasModule } from "./has/has.module";
import { GaaModule } from "./has/gaa/gaa.module";
import { GthModule } from "./has/gaa/gth/gth.module";
import { GsrModule } from "./has/gaa/gth/gsr/gsr.module";
import { PostulantesModule } from "./has/gaa/gth/gsr/postulantes/postulantes.module";
import { TrabajosModule } from "./has/gaa/gth/gsr/trabajos/trabajos.module";
import { CoreModule } from "./core/core.module";
import { AuthModule } from "./core/auth/auth.module";
import { CommonModule } from "./core/common/common.module";
import { ComsModule } from "./core/coms/coms.module";
import { UsersModule } from "./core/users/users.module";

const HasRoutes: Routes = [
    {
        path: 'has',
        module: HasModule,
        children: [
            {
                path: 'gaa',
                module: GaaModule,
                children: [
                    {
                        path: 'gth',
                        module: GthModule,
                        children: [
                            {
                                path: 'gsr',
                                module: GsrModule,
                                children: [
                                    {
                                        path: 'postulantes',
                                        module: PostulantesModule,
                                    },
                                    {
                                        path: 'trabajos',
                                        module: TrabajosModule,
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const CoreRoutes: Routes = [
    {
        path: 'core',
        module: CoreModule,
        children: [
            {
                path: 'auth',
                module: AuthModule,
            },
            {
                path: 'common',
                module: CommonModule,
            },
            {
                path: 'coms',
                module: ComsModule,
            },
            {
                path: 'users',
                module: UsersModule,
            }
        ]
    }
]
export const routes: Routes = [
    ...HasRoutes,
    ...CoreRoutes
]