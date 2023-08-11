import './jokes-table.scss';

const JokesTable = () => {

  const data = [
    { title: 'Sample Title 1', author: 'John Doe', createdDate: '2023-08-01', views: 120 },
    { title: 'Sample Title 2', author: 'Jane Smith', createdDate: '2023-07-25', views: 85 },
    { title: 'Sample Title 3', author: 'Mike Johnson', createdDate: '2023-07-15', views: 220 },

  ];
  return (
    <section>

      <h2>Jokes</h2>
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Created Date</th>
              <th>Views</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.createdDate}</td>
                <td>{item.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default JokesTable