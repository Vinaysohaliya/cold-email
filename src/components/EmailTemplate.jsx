import React, { useRef } from 'react';

function EmailTemplate({ variables }) {
  const emailRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(emailRef.current.innerText);
    alert("Email copied to clipboard!");
  };

  return (
    <div className="p-4 md:w-1/2">
      <h2 className="text-xl font-semibold mb-4">Email Preview</h2>
      <div ref={emailRef} className="bg-gray-100 p-4 rounded">
        <p>Dear {variables.recipientName},</p>
        <p>
          I hope this message finds you well. My name is Vinay Sohaliya, and I am a Software Engineer with experience in full-stack development. I recently came across your {variables.companyName} company.
        </p>
        <p>
          I am particularly interested in {variables.position} and believe my skills and experience make me a strong fit for your team.
        </p>
        <p>
          My background includes proficiency in Java, Python, C, SQL, and JavaScript. I have hands-on experience with frameworks and libraries such as Next.js, React.js, Node.js, Redux, and Docker. I have successfully implemented projects including a learning management system and various e-commerce and social media applications. I also have practical experience with database management using MongoDB, MySQL, Appwrite, and Firebase.
        </p>
        <p>
          I have previously worked as a Backend Engineer at Knovator, where I optimized backend processes and improved system performance. Additionally, my internships at ITJOBXS and Murani Infotech have further honed my skills in both backend and full-stack development.
        </p>
        <p>
          I have also solved over 200 DSA questions on platforms like LeetCode and GeeksforGeeks.
        </p>
        <p>
          I am keen to contribute my technical expertise and enthusiasm to your company and would love to discuss how my background aligns with your needs.
        </p>
        <p>
          Please find my resume attached for more details about my experience and projects.
        </p>
        <p>
          Thank you for considering my application. I look forward to the possibility of discussing this opportunity further.
        </p>
        <p>Best regards,</p>
        <p>Vinay Sohaliya</p>
        <p>+91 9727067509</p>
        <p>sohaliyavin01@gmail.com</p>
        <p><a href="https://www.linkedin.com/in/vinay-sohaliya-vin01/">https://www.linkedin.com/in/vinay-sohaliya-vin01/</a></p>
        <p><a href="https://github.com/Vinaysohaliya">https://github.com/Vinaysohaliya</a></p>
        <p><a href="https://leetcode.com/u/vinay_sohaliya/">https://leetcode.com/u/vinay_sohaliya/</a></p>
        <p><a href="https://www.geeksforgeeks.org/user/sohaliybrkp/">https://www.geeksforgeeks.org/user/sohaliybrkp/</a></p>
      </div>
      <button
        onClick={handleCopy}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Copy Email
      </button>
    </div>
  );
}

export default EmailTemplate;
