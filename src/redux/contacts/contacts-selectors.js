export const getAllContacts = store => store.contacts.items;
export const getFilteredContacts = store => {
  if (!store.filter) {
    return store.contacts.items;
  }
  const normalizedFilter = store.filter.toLowerCase();
  return store.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const getIsLoading = store => store.contacts.isLoading;

export const getError = store => store.contacts.error;
