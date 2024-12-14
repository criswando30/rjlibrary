document.addEventListener("DOMContentLoaded", () => {
    // Animasi untuk navbar
    gsap.from("nav", {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power3.out"
    });
  
    // Animasi untuk bagian about
    gsap.from(".about_image img", {
      duration: 1.5,
      x: -200,
      opacity: 0,
      ease: "power2.out",
      delay: 0.5
    });
  
    gsap.from(".about_tag", {
      duration: 1.5,
      x: 200,
      opacity: 0,
      ease: "power2.out",
      delay: 0.5
    });
  
    // Animasi untuk kartu layanan
    gsap.from(".services_card", {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      stagger: 0.3, // Menambahkan delay bertahap untuk setiap kartu
      ease: "elastic.out(1, 0.5)",
      delay: 1
    });
  
    // Animasi footer
    gsap.from("footer", {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out",
      delay: 1.5
    });
  

  });
  