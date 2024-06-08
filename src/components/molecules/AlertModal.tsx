interface AlertModalProps {
  title: string;
  description: string;
  onSubmit?: () => void;
  onCancel?: () => void;
}

const AlertModal = ({
  title,
  description,
  onSubmit,
  onCancel,
}: AlertModalProps) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        <div className="modal-buttons">
          <button className="button right-answer" onClick={onSubmit}>
            Submit
          </button>
          <button className="button wrong-answer" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
