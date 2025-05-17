import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    const formData = new FormData(event.target);

    formData.append("access_key", "15f07c14-171c-4f55-960b-195898fabb02");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
      });
      const result = await response.json();
      
      if (result.success) {
        console.log(result);
        setStatus("success");
        event.target.reset();
      } else {
        console.error(result);
        setStatus("error");
      }
      setMessage(result.message);
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setMessage("An error occurred while sending the message.");
    }
  }

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="name"/>
        <input type="email" name="email"/>
        <textarea name="message"></textarea>
        <button type="submit">Submit Form</button>
      </form> */}
      <div className="m-7">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
            <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
            <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="text-sm text-gray-600 dark:text-gray-400">Phone Number</label>
            <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

            <textarea rows={5} name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full px-3 py-4 text-white bg-black rounded-md focus:outline-none">
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </div>
          <p className="text-base text-center text-gray-500">{message}</p>
        </form>
      </div>
    </>
  );
}