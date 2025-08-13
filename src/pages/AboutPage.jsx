import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Frontend Developer Test - Product Card Component</h1>
        <hr />
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="text-center mb-4">Overview</h2>
            <p className="lead text-center mb-5">
              This project implements a responsive Product Card UI component as part of a Frontend Developer Test. 
              The component displays products with category-specific variant options, real-time stock management, and responsive design.
            </p>

            <h3 className="mb-3">Features Implemented</h3>
            <div className="row">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-2">✅ Product image, name, price display</li>
                  <li className="mb-2">✅ Category-specific variant dropdowns:</li>
                  <li className="mb-1 ms-4">• <strong>Clothing:</strong> Size options (Small, Medium, Large, XL)</li>
                  <li className="mb-1 ms-4">• <strong>Jewelry:</strong> Material options (Gold, Silver, Platinum)</li>
                  <li className="mb-2 ms-4">• <strong>Electronics:</strong> Color options (Gray, White, Black)</li>
                  <li className="mb-2">✅ Add to Cart functionality with Redux integration</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-2">✅ Out-of-stock handling with disabled states</li>
                  <li className="mb-2">✅ Star ratings with review counts</li>
                  <li className="mb-2">✅ Real-time stock management (5 items per variant)</li>
                  <li className="mb-2">✅ Responsive Bootstrap layout</li>
                  <li className="mb-2">✅ Toast notifications for user feedback</li>
                </ul>
              </div>
            </div>

            <h3 className="mt-5 mb-3">Technical Implementation</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Layout Approach</h5>
                    <p className="card-text">
                      Implemented a responsive product card component using Bootstrap's grid system with flexbox layout, 
                      ensuring consistent card heights and optimal spacing across different screen sizes. The component 
                      features a clean, modern design with product image, title, description, star ratings, 
                      category-specific variant dropdowns, and dynamic pricing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Responsiveness Considerations</h5>
                    <p className="card-text">
                      The layout uses Bootstrap's responsive column classes to display 3 cards per row on desktop, 
                      2 on tablet, and 1 on mobile devices, with proper spacing and card scaling that maintains 
                      readability and usability across all viewport sizes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage