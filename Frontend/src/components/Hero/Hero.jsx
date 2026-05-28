import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section
      className="
relative
min-h-screen
bg-cover
bg-center
flex
items-center
justify-center
"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1600')",
      }}
    >
      {/* Dark Overlay */}

      <div
        className="
absolute
inset-0
bg-black/60
"
      ></div>

      {/* Content */}

      <div
        className="
relative
z-10
text-center
text-white
px-6
max-w-4xl
"
      >
        <h1
          className="
text-5xl
md:text-7xl
font-bold
leading-tight
"
        >
          Empowering Women, Supporting Children, Creating Change
        </h1>

        <p
          className="
mt-8
text-lg
md:text-xl
max-w-2xl
mx-auto
"
        >
          She Can Foundation works toward women empowerment, child welfare,
          education, healthcare, and creating better opportunities for
          communities.
        </p>

        <div
          className="
flex
flex-col
sm:flex-row
justify-center
gap-5
mt-10
"
        >
          <button
            className="
bg-pink-600
px-8
py-4
rounded-lg
font-semibold
hover:bg-pink-700
"
          >
            Donate Now
          </button>

          <button
            onClick={() => navigate("/register")}
            className="
border-2
border-white
px-8
py-4
rounded-lg
font-semibold
hover:bg-white
hover:text-black
transition
"
          >
            Become Volunteer
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
