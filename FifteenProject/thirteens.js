const text = [
  `Artificial Intelligence (AI) continues to revolutionize various industries, from healthcare and finance to transportation and entertainment. With advancements in machine learning and deep learning algorithms, AI systems are becoming increasingly sophisticated, enabling tasks such as natural language processing, image recognition, and autonomous decision-making.`,
  
  `Blockchain technology, known primarily for its association with cryptocurrencies like Bitcoin, is now being adopted across diverse sectors. Its decentralized and secure nature makes it valuable for applications beyond finance, including supply chain management, healthcare data management, and digital identity verification.`,

  `The Internet of Things (IoT) is expanding rapidly, connecting an ever-growing number of devices and sensors to the internet. This interconnected network enables seamless communication and data exchange between physical objects, paving the way for smart homes, smart cities, and industrial automation.`,

  `5G technology is poised to revolutionize connectivity with its promise of ultra-fast data speeds, low latency, and high reliability. As 5G networks continue to roll out globally, they will unlock new possibilities for mobile communication, IoT devices, virtual reality, and augmented reality applications.`,

  `Cybersecurity remains a critical concern as digital threats evolve and grow in complexity. Organizations are investing heavily in cybersecurity measures to protect their data, networks, and systems from cyberattacks, ransomware, and data breaches. This includes implementing robust encryption, multi-factor authentication, and advanced threat detection solutions.`,

  `Quantum computing is on the horizon, offering immense computational power that could tackle complex problems currently beyond the capabilities of classical computers. While still in the experimental stage, advancements in quantum hardware and algorithms are bringing quantum computing closer to practical applications in areas such as cryptography, drug discovery, and optimization.`,

  `Edge computing is gaining traction as the proliferation of IoT devices generates vast amounts of data that require real-time processing and analysis. By bringing computation closer to the data source, edge computing reduces latency, bandwidth usage, and dependency on centralized cloud servers, making it ideal for applications like autonomous vehicles, smart grids, and industrial automation.`,

  `Augmented Reality (AR) and Virtual Reality (VR) technologies are reshaping the way we interact with digital content and the physical world. From immersive gaming experiences to virtual training simulations and interactive marketing campaigns, AR and VR offer endless possibilities for entertainment, education, and enterprise applications.`,

  `Biotechnology continues to advance, driving breakthroughs in personalized medicine, gene editing, and bioinformatics. From CRISPR-based gene therapies to mRNA vaccines and synthetic biology, biotech innovations are revolutionizing healthcare, agriculture, and environmental sustainability.`,

  `Renewable energy technologies, such as solar, wind, and hydroelectric power, are gaining momentum as the world seeks to transition to cleaner and more sustainable energy sources. With advancements in energy storage, grid integration, and efficiency, renewables are becoming increasingly cost-effective and scalable, paving the way for a greener future.`
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
