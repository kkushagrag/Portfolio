// import React, { useState } from 'react';
// // import { send } from 'emailjs-com';

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [formStatus, setFormStatus] = useState({
//     submitting: false,
//     sent: false,
//     error: null
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormStatus({ submitting: true, sent: false, error: null });

//     try {
//       // Replace with your actual EmailJS Service ID, Template ID, and User ID
//       await send(
//         'YOUR_SERVICE_ID', // e.g. 'service_abc123'
//         'YOUR_TEMPLATE_ID', // e.g. 'template_abc123'
//         {
//           from_name: formData.name,
//           to_name: 'Your Name', // Replace with your name
//           subject: formData.subject,
//           message: formData.message,
//           reply_to: formData.email
//         },
//         'YOUR_USER_ID' // e.g. 'user_abc123'
//       );

//       setFormStatus({ submitting: false, sent: true, error: null });
//       // Reset form after successful submission
//       setFormData({ name: '', email: '', subject: '', message: '' });
      
//       // Reset success message after 5 seconds
//       setTimeout(() => {
//         setFormStatus(prev => ({ ...prev, sent: false }));
//       }, 5000);
//     } catch (error) {
//       setFormStatus({ submitting: false, sent: false, error: error.message });
//     }
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div 
//         className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"
//         style={{
//           backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
//           backgroundSize: "40px 40px"
//         }}
//       />
      
//       <section className="relative w-full py-24 px-4">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-7xl md:text-8xl lg:text-9xl font-serif mb-16 text-center">
//             contact.
//           </h2>
          
//           <div className="bg-white rounded-lg shadow-xl p-8">
//             {formStatus.sent && (
//               <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
//                 Thank you for your message! I'll get back to you soon.
//               </div>
//             )}
            
//             {formStatus.error && (
//               <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//                 Something went wrong: {formStatus.error}. Please try again later.
//               </div>
//             )}
            
//             <form onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Your name"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>
              
//               <div className="mb-6">
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="What's this about?"
//                 />
//               </div>
              
//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows="5"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Your message here..."
//                 ></textarea>
//               </div>
              
//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   disabled={formStatus.submitting}
//                   className={`px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 ${
//                     formStatus.submitting ? 'opacity-70 cursor-not-allowed' : ''
//                   }`}
//                 >
//                   {formStatus.submitting ? 'Sending...' : 'Send Message'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactSection;