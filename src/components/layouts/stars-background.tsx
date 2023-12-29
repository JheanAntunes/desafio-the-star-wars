const Stars = () => (
  <>
    {Array.from({ length: 29 }).map((_, index) => (
      <div className="star" key={`star_${index}`} />
    ))}
  </>
)

function StarsBackground() {
  return (
    <div className="stars">
      <Stars />
    </div>
  )
}

export default StarsBackground
