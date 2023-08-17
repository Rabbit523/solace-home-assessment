import { IsString, Length } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @Length(20, 300)
  content: string;
}
