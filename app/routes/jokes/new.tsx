export default function NewJokeRoute() {
  return (
    <div>
      <p>Add your own jokes</p>
      <form method="post">
        <div>
          <label htmlFor="name">
            Name
            <input type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="Content">
            Content
            <textarea name="content" id="content" cols="30" rows="10" />
          </label>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
