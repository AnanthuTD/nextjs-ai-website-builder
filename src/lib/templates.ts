export const sampleTemplates: Record<string, { html: string; css: string }> = {
	"Health & Fitness": {
		html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fit Life - Health & Fitness</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <header class="header">
    <div class="logo">Fit Life</div>
    <nav class="nav">
      <a href="#home">Home</a>
      <a href="#programs">Programs</a>
      <a href="#schedule">Schedule</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <section class="hero" id="home">
    <img src="https://via.placeholder.com/1200x400" alt="Fitness">
    <h1>Unleash Your Potential</h1>
    <button class="cta-btn">Join Now</button>
  </section>
  <section class="programs" id="programs">
    <h2>Our Programs</h2>
    <div class="program-grid">
      <div class="program-card">
        <img src="https://via.placeholder.com/300x200" alt="Yoga">
        <h3>Yoga Flow</h3>
        <p>Find peace and flexibility</p>
      </div>
      <div class="program-card">
        <img src="https://via.placeholder.com/300x200" alt="Cardio">
        <h3>Cardio Blast</h3>
        <p>Boost your endurance</p>
      </div>
      <div class="program-card">
        <img src="https://via.placeholder.com/300x200" alt="Strength">
        <h3>Strength Training</h3>
        <p>Build muscle and power</p>
      </div>
    </div>
  </section>
  <section class="schedule" id="schedule">
    <h2>Class Schedule</h2>
    <div class="schedule-grid">
      <div class="schedule-item">Monday - Yoga - 10 AM</div>
      <div class="schedule-item">Wednesday - Cardio - 6 PM</div>
      <div class="schedule-item">Friday - Strength - 8 AM</div>
    </div>
  </section>
  <section class="testimonials" id="testimonials">
    <h2>What Our Members Say</h2>
    <div class="testimonial-carousel">
      <div class="testimonial">“Transformed my life!” - Alex</div>
      <div class="testimonial">“Best trainers ever!” - Jamie</div>
    </div>
  </section>
  <section class="cta-section">
    <h2>Ready to Start Your Journey?</h2>
    <button class="cta-btn">Sign Up Today</button>
  </section>
  <footer class="footer" id="contact">
    <p>Contact Us: info@fitlife.com</p>
    <div class="social-icons">
      <a href="#"><img src="https://via.placeholder.com/30" alt="Facebook"></a>
      <a href="#"><img src="https://via.placeholder.com/30" alt="Instagram"></a>
    </div>
  </footer>
</body>
</html>
      `,
		css: `
body { font-family: 'Roboto', sans-serif; margin: 0; padding: 0; background: #f4f4f4; }
    .header { position: fixed; top: 0; width: 100%; background: #28a745; color: white; display: flex; justify-content: space-between; padding: 10px 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); z-index: 100; }
    .logo { font-size: 1.5rem; font-weight: bold; }
    .nav a { color: white; margin: 0 10px; text-decoration: none; }
    .hero { position: relative; text-align: center; margin-top: 60px; }
    .hero img { width: 100%; height: 400px; object-fit: cover; }
    .hero h1 { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 3rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
    .cta-btn { padding: 10px 20px; background: #ff6f61; color: white; border: none; border-radius: 5px; cursor: pointer; transition: background 0.3s ease; }
    .cta-btn:hover { background: #ee5253; }
    .programs { padding: 40px 20px; text-align: center; }
    .programs h2 { font-size: 2.5rem; color: #333; }
    .program-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; max-width: 1200px; margin: 0 auto; }
    .program-card { background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1); transition: transform 0.3s ease; }
    .program-card:hover { transform: translateY(-5px); }
    .program-card img { width: 100%; height: 200px; object-fit: cover; }
    .program-card h3 { font-size: 1.5rem; margin: 10px 0; color: #28a745; }
    .program-card p { margin: 0 10px 10px; color: #666; }
    .schedule { padding: 40px 20px; background: #e9ecef; text-align: center; }
    .schedule h2 { font-size: 2.5rem; color: #333; }
    .schedule-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; max-width: 800px; margin: 20px auto; }
    .schedule-item { background: white; padding: 15px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .testimonials { padding: 40px 20px; text-align: center; }
    .testimonials h2 { font-size: 2.5rem; color: #333; }
    .testimonial-carousel { max-width: 800px; margin: 20px auto; overflow: hidden; position: relative; }
    .testimonial { font-style: italic; color: #555; padding: 10px; animation: slide 10s infinite; }
    @keyframes slide { 0% { transform: translateX(0); } 50% { transform: translateX(-100%); } 100% { transform: translateX(0); } }
    .cta-section { background: #ff6f61; color: white; padding: 40px 20px; text-align: center; }
    .cta-section h2 { font-size: 2rem; margin-bottom: 10px; }
    .footer { background: #333; color: white; padding: 20px; text-align: center; }
    .social-icons img { width: 30px; margin: 0 10px; }
    @media (max-width: 768px) { .hero h1 { font-size: 2rem; } .program-grid { grid-template-columns: 1fr; } }
      `,
	},
	"Course Selling": {
		html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LearnHub - Online Courses</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <header class="header">
    <div class="logo">LearnHub</div>
    <nav class="nav">
      <a href="#home">Home</a>
      <a href="#curriculum">Curriculum</a>
      <a href="#preview">Preview</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
    </nav>
  </header>
  <section class="hero" id="home">
    <img src="https://via.placeholder.com/1200x400" alt="Online Learning">
    <h1>Master New Skills</h1>
    <button class="cta-btn">Enroll Now</button>
  </section>
  <section class="curriculum" id="curriculum">
    <h2>Course Curriculum</h2>
    <div class="module-list">
      <div class="module-item">
        <span class="icon">📘</span>
        <h3>Module 1: Introduction</h3>
        <p>Learn the basics of the subject.</p>
      </div>
      <div class="module-item">
        <span class="icon">📘</span>
        <h3>Module 2: Core Concepts</h3>
        <p>Dive deeper into key principles.</p>
      </div>
      <div class="module-item">
        <span class="icon">📘</span>
        <h3>Module 3: Advanced Topics</h3>
        <p>Explore complex ideas and applications.</p>
      </div>
    </div>
  </section>
  <section class="preview" id="preview">
    <h2>Course Preview</h2>
    <div class="video-placeholder">
      <img src="https://via.placeholder.com/800x450" alt="Course Preview Video">
    </div>
  </section>
  <section class="testimonials" id="testimonials">
    <h2>What Students Say</h2>
    <div class="testimonial-carousel">
      <div class="testimonial">“Amazing course!” - Sarah</div>
      <div class="testimonial">“Learned so much!” - Mike</div>
    </div>
  </section>
  <section class="pricing" id="pricing">
    <h2>Pricing Plans</h2>
    <div class="pricing-grid">
      <div class="plan">
        <h3>Basic</h3>
        <p>$49</p>
        <button class="cta-btn">Choose Plan</button>
      </div>
      <div class="plan">
        <h3>Pro</h3>
        <p>$99</p>
        <button class="cta-btn">Choose Plan</button>
      </div>
    </div>
  </section>
  <section class="faq" id="faq">
    <h2>Frequently Asked Questions</h2>
    <div class="accordion">
      <div class="accordion-item">
        <input type="checkbox" id="faq1">
        <label class="accordion-toggle" for="faq1">What is included in the course?</label>
        <div class="accordion-content">
          <p>The course includes video lessons, quizzes, and assignments.</p>
        </div>
      </div>
      <div class="accordion-item">
        <input type="checkbox" id="faq2">
        <label class="accordion-toggle" for="faq2">Can I get a refund?</label>
        <div class="accordion-content">
          <p>Yes, we offer a 30-day money-back guarantee.</p>
        </div>
      </div>
    </div>
  </section>
  <footer class="footer">
    <form class="newsletter">
      <input type="email" placeholder="Your Email">
      <button type="submit">Subscribe</button>
    </form>
  </footer>
</body>
</html>
      `,
		css: `
 body { font-family: 'Poppins', sans-serif; margin: 0; padding: 0; background: #fff; }
    .header { background: #007bff; color: white; padding: 10px 20px; display: flex; justify-content: space-between; }
    .logo { font-size: 1.5rem; font-weight: bold; }
    .nav a { color: white; margin: 0 10px; text-decoration: none; }
    .hero { position: relative; text-align: center; }
    .hero img { width: 100%; height: 400px; object-fit: cover; }
    .hero h1 { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 3rem; }
    .cta-btn { padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; }
    .cta-btn:hover { background: #218838; }
    .curriculum { padding: 40px 20px; background: #f8f9fa; text-align: center; }
    .module-list { max-width: 800px; margin: 0 auto; }
    .module-item { background: white; padding: 20px; margin: 10px 0; border-left: 5px solid #007bff; display: flex; align-items: center; }
    .module-item .icon { font-size: 1.5rem; margin-right: 10px; }
    .preview { padding: 40px 20px; text-align: center; }
    .video-placeholder { max-width: 800px; margin: 0 auto; }
    .video-placeholder img { width: 100%; }
    .testimonials { background: #e9ecef; padding: 40px 20px; text-align: center; }
    .testimonial-carousel { max-width: 800px; margin: 20px auto; overflow: hidden; }
    .testimonial { font-style: italic; color: #555; padding: 10px; animation: slide 8s infinite; }
    @keyframes slide { 0% { transform: translateX(0); } 50% { transform: translateX(-100%); } 100% { transform: translateX(0); } }
    .pricing { padding: 40px 20px; text-align: center; }
    .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; max-width: 800px; margin: 0 auto; }
    .plan { background: #007bff; color: white; padding: 20px; border-radius: 10px; }
    .faq { padding: 40px 20px; background: #f8f9fa; text-align: center; }
    .accordion { max-width: 800px; margin: 0 auto; }
    .accordion-item { margin-bottom: 10px; }
    .accordion-toggle { background: #007bff; color: white; padding: 10px; width: 100%; text-align: left; border: none; cursor: pointer; }
    .accordion-content { display: none; padding: 10px; background: white; }
    .accordion-toggle:hover { background: #0056b3; }
    .accordion-item input[type="checkbox"] { display: none; }
    .accordion-item input[type="checkbox"]:checked + .accordion-toggle + .accordion-content { display: block; }
    .footer { background: #333; color: white; padding: 20px; text-align: center; }
    .newsletter input { padding: 10px; border: none; border-radius: 5px; }
    .newsletter button { padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; }
    @media (max-width: 768px) { .hero h1 { font-size: 2rem; } }
      `,
	},
	"E-commerce": {
		html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Trendy Store - E-commerce</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
  <header class="header">
    <div class="logo">Trendy Store</div>
    <nav class="nav">
      <a href="#home">Home</a>
      <a href="#shop">Shop</a>
      <a href="#about">About</a>
      <a href="#" class="cart-icon">🛒 <span class="cart-count">0</span></a>
    </nav>
  </header>
  <section class="hero" id="home">
    <img src="https://via.placeholder.com/1200x400" alt="Products">
    <h1>Shop the Latest Styles</h1>
    <button class="cta-btn">Shop Now</button>
  </section>
  <section class="products" id="shop">
    <div class="filters">
      <button class="filter-btn">All</button>
      <button class="filter-btn">Clothing</button>
      <button class="filter-btn">Accessories</button>
    </div>
    <div class="product-grid">
      <div class="product-card">
        <img src="https://via.placeholder.com/300x300" alt="Product 1">
        <h3>Item 1</h3>
        <p>$29.99</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
      <div class="product-card">
        <img src="https://via.placeholder.com/300x300" alt="Product 2">
        <h3>Item 2</h3>
        <p>$39.99</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </section>
  <section class="reviews">
    <h2>Customer Reviews</h2>
    <div class="review">“Great quality!” - Jane</div>
  </section>
  <footer class="footer">
    <p>Free Shipping on Orders Over $50</p>
    <form class="newsletter">
      <input type="email" placeholder="Your Email">
      <button type="submit">Subscribe</button>
    </form>
  </footer>
  <script>
    let cartCount = 0;
    $('.add-to-cart').click(function() {
      cartCount++;
      $('.cart-count').text(cartCount);
      $(this).text('Added!').css('background', '#28a745');
    });
  </script>
</body>
</html>
      `,
		css: `
body { font-family: 'Roboto', sans-serif; margin: 0; padding: 0; background: #f8f9fa; }
    .header { background: #6c757d; color: white; padding: 10px 20px; display: flex; justify-content: space-between; }
    .logo { font-size: 1.5rem; font-weight: bold; }
    .nav a { color: white; margin: 0 10px; text-decoration: none; }
    .cart-icon { font-size: 1.2rem; }
    .hero { position: relative; text-align: center; }
    .hero img { width: 100%; height: 400px; object-fit: cover; }
    .hero h1 { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 3rem; }
    .cta-btn { padding: 10px 20px; background: #20c997; color: white; border: none; border-radius: 5px; cursor: pointer; }
    .cta-btn:hover { background: #1ca885; }
    .products { padding: 40px 20px; text-align: center; }
    .filters { margin-bottom: 20px; }
    .filter-btn { padding: 5px 10px; margin: 0 5px; background: #e9ecef; border: none; cursor: pointer; }
    .filter-btn:hover { background: #20c997; color: white; }
    .product-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; max-width: 1200px; margin: 0 auto; }
    .product-card { background: white; padding: 15px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); transition: transform 0.3s ease; }
    .product-card:hover { transform: scale(1.03); }
    .product-card img { width: 100%; height: 300px; object-fit: cover; }
    .add-to-cart { background: #6c757d; color: white; padding: 10px; width: 100%; border: none; border-radius: 5px; cursor: pointer; }
    .add-to-cart:hover { background: #5a6268; }
    .reviews { background: #e9ecef; padding: 40px 20px; text-align: center; }
    .footer { background: #333; color: white; padding: 20px; text-align: center; }
    .newsletter input { padding: 10px; border: none; border-radius: 5px; }
    .newsletter button { padding: 10px 20px; background: #20c997; color: white; border: none; border-radius: 5px; }
    @media (max-width: 768px) { .hero h1 { font-size: 2rem; } }
      `,
	},
	Portfolio: {
		html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>John Doe - Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <header class="header">
    <div class="logo">John Doe</div>
    <nav class="nav">
      <a href="#home">Home</a>
      <a href="#works">Works</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <section class="hero" id="home">
    <h1>Creative Designer</h1>
  </section>
  <section class="works" id="works">
    <h2>My Works</h2>
    <div class="work-grid">
      <div class="work-item">
        <img src="https://via.placeholder.com/400x300" alt="Project 1">
        <h3>Project 1</h3>
      </div>
      <div class="work-item">
        <img src="https://via.placeholder.com/400x300" alt="Project 2">
        <h3>Project 2</h3>
      </div>
    </div>
  </section>
  <section class="services" id="services">
    <h2>Services</h2>
    <div class="service-grid">
      <div class="service-card">
        <span class="icon">🎨</span>
        <h3>Graphic Design</h3>
      </div>
      <div class="service-card">
        <span class="icon">💻</span>
        <h3>Web Design</h3>
      </div>
    </div>
  </section>
  <section class="about" id="about">
    <h2>About Me</h2>
    <p>Passionate about design and innovation.</p>
  </section>
  <section class="contact" id="contact">
    <h2>Contact</h2>
    <form class="contact-form">
      <input type="text" placeholder="Name" required>
      <input type="email" placeholder="Email" required>
      <textarea placeholder="Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
  <footer class="footer">
    <p>&copy; 2023 John Doe</p>
  </footer>
</body>
</html>
      `,
		css: `
 body { font-family: 'Poppins', sans-serif; margin: 0; padding: 0; background: #fff; }
    .header { position: sticky; top: 0; background: #001f3f; color: white; padding: 10px 20px; display: flex; justify-content: space-between; z-index: 100; }
    .logo { font-size: 1.5rem; font-weight: bold; }
    .nav a { color: white; margin: 0 10px; text-decoration: none; }
    .hero { background: #f8f9fa; text-align: center; padding: 100px 20px; }
    .hero h1 { font-size: 3rem; color: #001f3f; }
    .works { padding: 40px 20px; text-align: center; }
    .work-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; max-width: 1200px; margin: 0 auto; }
    .work-item { background: #e9ecef; border-radius: 10px; overflow: hidden; }
    .work-item img { width: 100%; height: 300px; object-fit: cover; }
    .services { background: #f8f9fa; padding: 40px 20px; text-align: center; }
    .service-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; max-width: 800px; margin: 0 auto; }
    .service-card { background: white; padding: 20px; border-radius: 10px; }
    .service-card .icon { font-size: 2rem; }
    .about { padding: 40px 20px; text-align: center; }
    .contact { background: #e9ecef; padding: 40px 20px; text-align: center; }
    .contact-form { max-width: 600px; margin: 0 auto; }
    .contact-form input, .contact-form textarea { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px; }
    .contact-form button { padding: 10px 20px; background: #001f3f; color: white; border: none; border-radius: 5px; cursor: pointer; }
    .contact-form button:hover { background: #003366; }
    .footer { background: #333; color: white; padding: 20px; text-align: center; }
    @media (max-width: 768px) { .hero h1 { font-size: 2rem; } }
      `,
	},
	Blog: {
		html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Blog</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <header class="header">
    <div class="logo">My Blog</div>
    <nav class="nav">
      <a href="#home">Home</a>
      <a href="#posts">Posts</a>
      <a href="#about">About</a>
      <input type="text" class="search-bar" placeholder="Search...">
    </nav>
  </header>
  <section class="hero" id="home">
    <h1>Thoughts & Stories</h1>
  </section>
  <section class="featured-post">
    <img src="https://via.placeholder.com/1200x400" alt="Featured Post">
    <h2>Featured Post Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <button class="cta-btn">Read More</button>
  </section>
  <section class="posts" id="posts">
    <div class="filters">
      <button class="filter-btn">All</button>
      <button class="filter-btn">Travel</button>
      <button class="filter-btn">Lifestyle</button>
    </div>
    <div class="post-list">
      <div class="post">
        <img src="https://via.placeholder.com/300x200" alt="Post 1">
        <h3>Post Title 1</h3>
        <p>Short excerpt...</p>
      </div>
      <div class="post">
        <img src="https://via.placeholder.com/300x200" alt="Post 2">
        <h3>Post Title 2</h3>
        <p>Short excerpt...</p>
      </div>
    </div>
  </section>
  <aside class="sidebar">
    <h2>About</h2>
    <p>Hi, I'm a writer sharing my journey.</p>
    <h3>Recent Posts</h3>
    <ul>
      <li><a href="#">Post 1</a></li>
      <li><a href="#">Post 2</a></li>
    </ul>
  </aside>
  <footer class="footer">
    <form class="subscribe">
      <input type="email" placeholder="Subscribe">
      <button type="submit">Join</button>
    </form>
  </footer>
</body>
</html>
      `,
		css: `
body { font-family: 'Poppins', sans-serif; margin: 0; padding: 0; background: #f4f4f4; }
    .header { background: #98ff98; color: #333; padding: 10px 20px; display: flex; justify-content: space-between; }
    .logo { font-size: 1.5rem; font-weight: bold; }
    .nav { display: flex; align-items: center; }
    .nav a { color: #333; margin: 0 10px; text-decoration: none; }
    .search-bar { padding: 5px; border: 1px solid #ccc; border-radius: 5px; }
    .hero { background: #e0e0e0; text-align: center; padding: 100px 20px; }
    .hero h1 { font-size: 3rem; color: #333; }
    .featured-post { padding: 40px 20px; text-align: center; }
    .featured-post img { width: 100%; max-width: 1200px; height: 400px; object-fit: cover; }
    .featured-post h2 { font-size: 2.5rem; margin: 20px 0; }
    .featured-post p { font-size: 1.2rem; color: #666; }
    .cta-btn { padding: 10px 20px; background: #98ff98; color: #333; border: none; border-radius: 5px; cursor: pointer; }
    .cta-btn:hover { background: #85e085; }
    .posts { padding: 40px 20px; max-width: 800px; margin: 0 auto; }
    .filters { margin-bottom: 20px; }
    .filter-btn { padding: 5px 10px; margin: 0 5px; background: #e9ecef; border: none; cursor: pointer; }
    .filter-btn:hover { background: #98ff98; }
    .post-list { display: grid; grid-template-columns: 1fr; gap: 20px; }
    .post { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .post img { width: 100%; height: 200px; object-fit: cover; }
    .sidebar { background: #e9ecef; padding: 20px; text-align: center; }
    .footer { background: #333; color: white; padding: 20px; text-align: center; }
    .subscribe input { padding: 10px; border: none; border-radius: 5px; }
    .subscribe button { padding: 10px 20px; background: #98ff98; color: #333; border: none; border-radius: 5px; }
    @media (max-width: 768px) { .hero h1 { font-size: 2rem; } }
      `,
	},
};
