import useJsonFetch from "./hooks/useJsonFetch";

export default function RenderLoading() {
  const { isLoading } = useJsonFetch(process.env.REACT_APP_BACKEND_URL + 'loading');

  return (
    <div className="component-container">
      {isLoading ? 'Loading...' : 'Loaded'}
    </div>
  )
}
