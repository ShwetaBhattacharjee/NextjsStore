const Loader = () => {
  return (
    <div
      className="flex items-center justify-center h-screen"
      role="status" // Indicates that the element is used for showing loading state
      aria-live="assertive" // Alerts screen readers that this is a high-priority update
      aria-label="Loading..." // Describes the purpose of the loader
    >
      <div
        className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"
        aria-hidden="true" // Hides the spinner from screen readers since it's purely decorative
      ></div>
    </div>
  );
};

export default Loader;
