import { List } from 'immutable';

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  // const myList = List(list);
  const newList = list.push(element);
  return newList;
}
