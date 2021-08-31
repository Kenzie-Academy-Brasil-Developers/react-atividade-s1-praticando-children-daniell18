import "./CentredCard.css";
function CenteredCard({ children }) {
  return (
    <div className="Pai">
      <span>{children}</span>
    </div>
  );
}
export default CenteredCard;
