const Ninjas = () => {
  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold">Ninja List</h3>
      <table className="font-mono">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Florian</td>
          <td>Soll</td>
          <td>42</td>
        </tr>
      </table>
    </div>
  );
};

export default Ninjas;
