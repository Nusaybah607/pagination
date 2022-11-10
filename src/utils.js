const paginate = (people) => {
  const itemsPerPage = 10;
  const pages = Math.ceil(people.length / itemsPerPage);
  const newPeople = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return people.slice(start, start + itemsPerPage);
  });
  return newPeople;
};
export default paginate;
