import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

describe('NotesController', () => {
  let controller: NotesController;
  let service: NotesService;

  beforeEach(async () => {
    service = new NotesService(); // or mock it if needed
    controller = new NotesController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a note', () => {
    const dto = { content: 'Test content' };
    const note = controller.create(dto);
    expect(note.content).toBe('Test content');
  });

  it('should retrieve all notes', () => {
    controller.create({ content: 'Note 1' });
    controller.create({ content: 'Note 2' });
    const notes = controller.findAll();
    expect(notes.length).toBe(2);
  });

  it('should retrieve a specific note using findOne', () => {
    controller.create({ content: 'Sample Note 1' });
    const note = controller.findOne('1'); // Note that id is passed as string due to @Param decorators
    expect(note.id).toBe(1);
    expect(note.content).toBe('Sample Note 1');
  });

  it('should update a specific note', () => {
    controller.create({ content: 'Old Content' });
    const updatedNote = controller.update('1', { content: 'Updated Content' });
    expect(updatedNote.content).toBe('Updated Content');
  });

  it('should delete a note using remove', () => {
    controller.create({ content: 'Sample Note 1' });
    controller.remove('1');
    expect(() => controller.findOne('1')).toThrow();
  });

  it('should find notes containing specific content using search', () => {
    controller.create({ content: 'This is a sample note.' });
    controller.create({ content: 'Another sample.' });
    controller.create({ content: 'Irrelevant note.' });
    const searchResults = controller.search('sample');
    expect(searchResults.length).toBe(2);
  });
});
