function ListName({ listName, setListName }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Give your list a name</h2>
      <label className="block text-sm text-gray-700">List name</label>
      <input
        type="text"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        placeholder="Type the list name"
        className="w-[30vw] border border-gray-300 rounded-md px-4 py-2"
      />
    </div>
  );
}

export default ListName;
