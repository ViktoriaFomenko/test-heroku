export const getContacts = ({ contacts }) => contacts.items;

export const FilteredNames = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name }) => {
    const normalized = name.toLowerCase();
    return normalized.includes(normalizedFilter);
  });

  return result;
};
