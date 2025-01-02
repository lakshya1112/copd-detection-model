// components/Features.jsx
const Features = () => {
    const features = [
      { title: "Networking Opportunities", description: "Connect with fellow alumni globally." },
      { title: "Career Path Tracking", description: "Access mentorship and career resources." },
      { title: "Event Participation", description: "Be a part of reunions, webinars, and workshops." },
      { title: "Exclusive Resources", description: "Job boards, newsletters, and more." },
    ];
  
    return (
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Join the Alumni Portal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  