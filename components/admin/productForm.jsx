export default function ProductForm({ onSubmit, product = {} }) {
    const [name, setName] = useState(product.name || "");
    const [price, setPrice] = useState(product.price || "");
    const [description, setDescription] = useState(product.description || "");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, price, description });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-description"
          ></textarea>
        </label>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    )
  }