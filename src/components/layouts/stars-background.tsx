const Stars = () => (
  <>
    {Array.from({ length: 4 }).map((_, index) => (
      <div className="star" key={`star_${index}`} />
    ))}
  </>
)

function StarsBackground() {
  return (
    <div className="stars -z-10">
      <Stars />
    </div>
  )
}

export default StarsBackground
