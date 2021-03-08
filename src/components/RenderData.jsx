import useJsonFetch from './hooks/useJsonFetch';

export default function RenderData() {
  const [data] = useJsonFetch(process.env.REACT_APP_BACKEND_URL + 'data');

  return (
    <ul className="component-container">
      <span className="data-header">Response object fields:</span>
      {data && Object.entries(data).map(entry => <li key={entry[0]}>{entry[0]}: {entry[1]}</li>)}
    </ul>
  )
}
