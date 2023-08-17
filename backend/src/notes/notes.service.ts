import { Injectable, NotFoundException } from '@nestjs/common';

export interface Note {
  id: number;
  content: string;
}

@Injectable()
export class NotesService {
  private notes: Note[] = [];
  private currentId: number = 1;

  findAll(): Note[] {
    return this.notes;
  }

  findOne(id: number): Note {
    const note = this.notes.find((note) => note.id === id);
    if (!note) {
      throw new NotFoundException(`Note with ID ${id} not found.`);
    }
    return note;
  }

  create(dto: { content: string }): Note {
    const note: Note = {
      id: this.currentId++,
      content: dto.content,
    };
    this.notes.push(note);
    return note;
  }

  update(id: number, dto: { content: string }): Note {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index === -1) {
      throw new NotFoundException(`Note with ID ${id} not found.`);
    }
    this.notes[index].content = dto.content;
    return this.notes[index];
  }

  remove(id: number): void {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index === -1) {
      throw new NotFoundException(`Note with ID ${id} not found.`);
    }
    this.notes.splice(index, 1);
  }

  search(term: string): Note[] {
    return this.notes.filter((note) =>
      note.content.toLowerCase().includes(term.toLowerCase()),
    );
  }
}
