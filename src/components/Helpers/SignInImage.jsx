export default function SignInImage() {
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/assets/images/signin_img-1.jpg`;

  return (
    <div>
      <div className="relative">
        <img
          src={backgroundImageUrl}
          alt="Background"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-[#028090] opacity-30" />
      </div>
    </div>
  );
}
