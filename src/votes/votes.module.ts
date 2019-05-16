import { Module } from '@nestjs/common';
import { VotesService } from './votes.service';
import { VotesResolver } from './votes.resolver';

@Module({
  providers: [VotesService, VotesResolver]
})
export class VotesModule {}
