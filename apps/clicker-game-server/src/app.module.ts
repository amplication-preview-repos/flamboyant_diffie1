import { Module } from "@nestjs/common";

import {
  OpenTelemetryModule,
  PipeInjector,
  ControllerInjector,
  EventEmitterInjector,
  GraphQLResolverInjector,
  GuardInjector,
} from "@amplication/opentelemetry-nestjs";

import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { TaskModule } from "./task/task.module";
import { ClubModule } from "./club/club.module";
import { FriendModule } from "./friend/friend.module";
import { PlayerModule } from "./player/player.module";
import { BoostModule } from "./boost/boost.module";
import { TapModule } from "./tap/tap.module";
import { ScoreModule } from "./score/score.module";
import { ItemModule } from "./item/item.module";
import { ClickEventModule } from "./clickEvent/clickEvent.module";
import { UserModule } from "./user/user.module";
import { BoostManagementModule } from "./BoostManagement/boostmanagement.module";
import { ClubManagementModule } from "./ClubManagement/clubmanagement.module";
import { PlayerManagementModule } from "./PlayerManagement/playermanagement.module";
import { ReferralManagementModule } from "./ReferralManagement/referralmanagement.module";
import { TapManagementModule } from "./TapManagement/tapmanagement.module";
import { TaskManagementModule } from "./TaskManagement/taskmanagement.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { LoggerModule } from "./logger/logger.module";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    KafkaModule,
    LoggerModule,
    TaskModule,
    ClubModule,
    FriendModule,
    PlayerModule,
    BoostModule,
    TapModule,
    ScoreModule,
    ItemModule,
    ClickEventModule,
    UserModule,
    BoostManagementModule,
    ClubManagementModule,
    PlayerManagementModule,
    ReferralManagementModule,
    TapManagementModule,
    TaskManagementModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    OpenTelemetryModule.forRoot({
      serviceName: "ClickerGame",
      spanProcessor: new BatchSpanProcessor(new OTLPTraceExporter()),
      instrumentations: [
        new HttpInstrumentation({
          requestHook: (span, request) => {
            if (request.method)
              span.setAttribute("http.method", request.method);
          },
        }),
      ],

      traceAutoInjectors: [
        ControllerInjector,
        EventEmitterInjector,
        GraphQLResolverInjector,
        GuardInjector,
        PipeInjector,
      ],
    }),
  ],
  providers: [],
})
export class AppModule {}
