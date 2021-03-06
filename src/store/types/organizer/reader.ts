import createTypes from 'redux-create-action-types';

export default createTypes(
  'ORGANIZER.GET_GROUP_READERS_REQUEST',
  'ORGANIZER.GET_GROUP_READERS_SUCCESS',
  'ORGANIZER.GET_GROUP_READERS_ERROR',

  'ORGANIZER.DELETE_READER_REQUEST',
  'ORGANIZER.DELETE_READER_SUCCESS',
  'ORGANIZER.DELETE_READER_ERROR',

  'ORGANIZER.DELETE_BULK_READER_REQUEST',
  'ORGANIZER.DELETE_BULK_READER_SUCCESS',
  'ORGANIZER.DELETE_BULK_READER_ERROR',

  'ORGANIZER.UPDATE_READER_REQUEST',
  'ORGANIZER.UPDATE_READER_SUCCESS',
  'ORGANIZER.UPDATE_READER_ERROR',

  'ORGANIZER.GET_READER_REQUEST',
  'ORGANIZER.GET_READER_SUCCESS',
  'ORGANIZER.GET_READER_ERROR',

  'ORGANIZER.GET_READER_DETAIL_REQUEST',
  'ORGANIZER.GET_READER_DETAIL_SUCCESS',
  'ORGANIZER.GET_READER_DETAIL_ERROR',

  'ORGANIZER.GET_READER_METRICS_REQUEST',
  'ORGANIZER.GET_READER_METRICS_SUCCESS',
  'ORGANIZER.GET_READER_METRICS_ERROR',

  'ORGANIZER.GET_READER_NOTES_REQUEST',
  'ORGANIZER.GET_READER_NOTES_SUCCESS',
  'ORGANIZER.GET_READER_NOTES_ERROR',

  'ORGANIZER.GET_READERS_REQUEST',
  'ORGANIZER.GET_READERS_SUCCESS',
  'ORGANIZER.GET_READERS_LOAD_MORE_SUCCESS',
  'ORGANIZER.GET_READERS_ERROR',

  'ORGANIZER.GET_SEARCH_READERS_REQUEST',
  'ORGANIZER.GET_SEARCH_READERS_SUCCESS',
  'ORGANIZER.GET_SEARCH_READERS_ERROR',

  'ORGANIZER.ASSIGN_READERS_REQUEST',
  'ORGANIZER.ASSIGN_READERS_SUCCESS',
  'ORGANIZER.ASSIGN_READERS_ERROR',

  'ORGANIZER.ADD_READERS_REQUEST',
  'ORGANIZER.ADD_READERS_SUCCESS',
  'ORGANIZER.ADD_READERS_ERROR',

  'ORGANIZER.ADD_READER_NOTE_REQUEST',
  'ORGANIZER.ADD_READER_NOTE_SUCCESS',
  'ORGANIZER.ADD_READER_NOTE_ERROR',

  'ORGANIZER.DELETE_ALL_READER_NOTE_REQUEST',
  'ORGANIZER.DELETE_ALL_READER_NOTE_SUCCESS',
  'ORGANIZER.DELETE_ALL_READER_NOTE_ERROR',

  'ORGANIZER.ADD_BOOK_REQUEST',
  'ORGANIZER.ADD_BOOK_SUCCESS',
  'ORGANIZER.ADD_BOOK_ERROR',

  'ORGANIZER.DELETE_BOOK_REQUEST',
  'ORGANIZER.DELETE_BOOK_SUCCESS',
  'ORGANIZER.DELETE_BOOK_ERROR',

  'ORGANIZER.REVIEW_BOOK_REQUEST',
  'ORGANIZER.REVIEW_BOOK_SUCCESS',
  'ORGANIZER.REVIEW_BOOK_ERROR',

  'ORGANIZER.FINISH_BOOK_REQUEST',
  'ORGANIZER.FINISH_BOOK_SUCCESS',
  'ORGANIZER.FINISH_BOOK_ERROR',

  'ORGANIZER.REREAD_BOOK_REQUEST',
  'ORGANIZER.REREAD_BOOK_SUCCESS',
  'ORGANIZER.REREAD_BOOK_ERROR',

  'ORGANIZER.GET_BOOKS_READING_REQUEST',
  'ORGANIZER.GET_BOOKS_READING_SUCCESS',
  'ORGANIZER.GET_BOOKS_READING_ERROR',
  'ORGANIZER.ADD_BOOKS_READING',

  'ORGANIZER.GET_BOOKS_FINISHED_REQUEST',
  'ORGANIZER.GET_BOOKS_FINISHED_SUCCESS',
  'ORGANIZER.GET_BOOKS_FINISHED_ERROR',

  'ORGANIZER.GET_BOOK_REQUEST',
  'ORGANIZER.GET_BOOK_SUCCESS',
  'ORGANIZER.GET_BOOK_ERROR',

  'ORGANIZER.GET_READER_FEEDS_REQUEST',
  'ORGANIZER.GET_READER_FEEDS_SUCCESS',
  'ORGANIZER.GET_READER_FEEDS_ERROR',

  'ORGANIZER.GET_READER_ENTRIES_REQUEST',
  'ORGANIZER.GET_READER_ENTRIES_SUCCESS',
  'ORGANIZER.GET_READER_ENTRIES_ERROR',

  'ORGANIZER.UPDATE_READER_FEEDS_REQUEST',
  'ORGANIZER.UPDATE_READER_FEEDS_SUCCESS',
  'ORGANIZER.UPDATE_READER_FEEDS_ERROR',

  'ORGANIZER.DELETE_READER_FEEDS_REQUEST',
  'ORGANIZER.DELETE_READER_FEEDS_SUCCESS',
  'ORGANIZER.DELETE_READER_FEEDS_ERROR',

  'ORGANIZER.GET_ALL_READERS_REQUEST',
  'ORGANIZER.GET_ALL_READERS_SUCCESS',
  'ORGANIZER.GET_ALL_READERS_ERROR'
);

export interface IFilterParam {
  type: 'readersFilter';
  page?: number;
  readers?: number;
  programs?: number[];
  groups?: number[];
  search?: string;
  isMore?: boolean;
  is_pagination?: number;
  sort_type?: string;
  sort_by?: string;
}

export enum UserRole {
  Parent = 'Parent',
  Reader = 'Reader',
  Child = 'Child',
  Owner = 'Owner',
  InternalReader = 'Internal Reader',
}
