const library_key = "books";

function getProjects() {
  return JSON.parse(localStorage.getItem(library_key));
}

function storeBook(library) {
  localStorage.setItem(library_key, JSON.stringify(library));
}

function deleteBook() {
  localStorage.removeItem();
}
