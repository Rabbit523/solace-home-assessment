import { Test, TestingModule } from '@nestjs/testing';
import { NotesService } from './notes.service';

describe('NotesService', () => {
  let service: NotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesService],
    }).compile();

    service = module.get<NotesService>(NotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a note', () => {
    const note = service.create({ content: 'This is a sample note' });
    expect(note.id).toBe(1);
    expect(note.content).toBe('This is a sample note');
  });

  it('should retrieve all notes', () => {
    service.create({ content: 'Sample Note 1' });
    service.create({ content: 'Sample Note 2' });
    const notes = service.findAll();
    expect(notes.length).toBe(2);
  });

  it('should retrieve a specific note using findOne', () => {
    service.create({ content: 'Sample Note 1' });
    const note = service.findOne(1);
    expect(note.id).toBe(1);
    expect(note.content).toBe('Sample Note 1');
  });

  it('should update a specific note', () => {
    service.create({ content: 'Old Content' });
    const updatedNote = service.update(1, { content: 'Updated Content' });
    expect(updatedNote.content).toBe('Updated Content');
  });

  it('should delete a note using remove', () => {
    service.create({ content: 'Sample Note 1' });
    service.remove(1);
    expect(() => service.findOne(1)).toThrow();
  });

  it('should find notes containing specific content using search', () => {
    service.create({ content: 'This is a sample note.' });
    service.create({ content: 'Another sample.' });
    service.create({ content: 'Irrelevant note.' });
    const searchResults = service.search('sample');
    expect(searchResults.length).toBe(2);
  });
});
