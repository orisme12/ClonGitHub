
export  function Animacion() {
  return (
    <div className="stars">
          {Array.from({ length: 100 }, (_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 2}s`, 
                animationDelay: `${Math.random() * 5}s`, 
              }}
            ></div>
          ))}
        </div>
  )
}
