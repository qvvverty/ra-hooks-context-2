import useJsonFetch from "./hooks/useJsonFetch";

export default function RenderError() {
  const [ , , hasError] = useJsonFetch(process.env.REACT_APP_BACKEND_URL + 'error');

  return (
    <div className="component-container">
      {hasError ? hasError : null}
    </div>
  )
}
