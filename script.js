const sendChatBtn = document.querySelector('#send-btn');
const chatInput = document.querySelector('.chat-input textarea');
const chatbox = document.querySelector('.chatbox');

const inputInitHeight = chatInput.scrollHeight;
const maxHeight = 180; 

const intents = [
  {
            "tag": "greeting",
            "patterns": [
                "Hi",
                "How are you?",
                "Is anyone there?",
                "Hello",
                "Good day",
                "What's up",
                "how are ya",
                "heyy",
                "whatsup",
                "??? ??? ??"
            ],
            "responses": [
                "Hello!",
                
                "Hi there, how can I help?"
            ],
            "context_set": ""
        },
        {
            "tag": "goodbye",
            "patterns": [
                "cya",
                "see you",
                "bye bye",
                "See you later",
                "Goodbye",
                "I am Leaving",
                "Bye",
                "Have a Good day",
                "talk to you later",
                "ttyl",
                "i got to go",
                "gtg"
            ],
            "responses": [
                "Sad to see you go :(",
                "Talk to you later",
                "Goodbye!",
                "Come back soon"
            ],
            "context_set": ""
        },
        {
            "tag": "creator",
            "patterns": [
                "what is the name of your developers",
                "what is the name of your creators",
                "what is the name of the developers",
                "what is the name of the creators",
                "who created you",
                "your developers",
                "your creators",
                "who are your developers",
                "developers",
                "you are made by",
                "you are made by whom",
                "who created you",
                "who create you",
                "creators",
                "who made you",
                "who designed you"
            ],
            "responses": [
                "The names of my creator are Ambikesh, Khushi and Priti"
            ],
            "context_set": ""
        },
        {
            "tag": "name",
            "patterns": [
                "name",
                "your name",
                "do you have a name",
                "what are you called",
                "what is your name",
                "what should I call you",
                "whats your name?",
                "what are you",
                "who are you",
                "who is this",
                "what am i chatting to",
                "who am i taking to",
                "what are you"
            ],
            "responses": [
                "You can call me NIIST.",
                "I'm NIIST-bot",
                "I am a Chatbot.",
                "I am your helper"
            ],
            "context_set": ""
        },
        {
            "tag": "about",
            "patterns":[
                "about",
                "about college",
                "college info",
                "intro of college",
                "give a short info about the college",
                "tell something about college "
            ],
            "responses":[
                "NRI Institute of Information Science and Technology (NIIST), established in 2007, is a leading private engineering college in Bhopal, Madhya Pradesh, affiliated with Rajarshi Shahu Maharaj University. The institute offers undergraduate (B.Tech) and postgraduate (M.Tech, MBA) programs in various engineering disciplines like Computer Science, Electronics, Mechanical, Civil, and Electrical Engineering. NIIST boasts modern infrastructure with state-of-the-art classrooms, labs, a library, and sports facilities. The college emphasizes research, innovation, and holistic student development through cultural events, technical fests, and strong industry collaborations. It has an impressive placement record, with top companies such as Infosys, Wipro, and TCS recruiting graduates. NIIST is committed to providing quality education and preparing students for successful careers. For more details, contact the institute at info@niitbhopal.edu.in, or call +91-755-2660201 / 2660703. The campus is located near T.T Nagar, Bhopal, Madhya Pradesh - 462003, India."
            ]
        },
       
        {
            "tag": "NIIST",
            "patterns":[
                "NIIST",
                "what is NIIST",
                "NIIST full form",
                "Does this college have a NIIST facility",
                "say something about the NIIST",
                "give a short info about the NIIST"
            ],
            "responses":[
                "The NRI Group of Institutions, Bhopal, was established in 2013 and has since become a reputed private educational organization affiliated with Barkatullah University, Bhopal. The institution is known for offering a wide range of undergraduate, postgraduate, and diploma programs in fields like engineering, management, pharmacy, and applied sciences. Spanning a 3-acre campus with modern facilities, the institute emphasizes a practical approach to learning. It has well-equipped laboratories, an extensive library, and dedicated research and development centers to support student innovation and growth. NRI Group is accredited by national bodies like NBA and recognized by organizations such as AICTE, INC, and NCTE, ensuring academic standards and quality education.The college is also noted for fostering student diversity, supporting both academic and co-curricular excellence, and providing strong placement assistance with partnerships across various industries​"
            ]
        },
        {
            "tag": "clubs",
            "patterns":[
                "clubs",
                "which clubs are present in this college",
                "list down the clubs",
                "tell something about co-curricular activities",
                "co-curricualr activities",
                "Student's chapter",
                "how many students chapters are presnt in the college"
            ],
            "responses":[
                "NRI Institute of Information Science and Technology (NIIST) offers a variety of student clubs that promote holistic development beyond academics. The Tech Club organizes workshops, coding competitions, and seminars on emerging technologies like AI and IoT. The Cultural Club fosters creativity through talent shows, music, dance, and drama performances. The Sports Club encourages physical fitness and teamwork through various indoor and outdoor sports. The Literary Club promotes reading, writing, and intellectual engagement through debates and essay competitions. The Robotics Club focuses on hands-on projects and competitions in robotics, while the Entrepreneurship Club nurtures innovation and business ideas. Additionally, the Social Service Club emphasizes community outreach with initiatives like blood donation camps and environmental awareness drives. These clubs provide students with opportunities to enhance leadership, teamwork, and communication skills, contributing to their overall personal and professional growth"
            ]
        },
        {
            "tag": "Eligibility Criteria",
            "patterns":[
                "Eligibility",
                "Eligibility Criteria",
                "what is the Eligibility Criteria for admission",
                "How much Score is required for Admission",
                "Does college accept CET score",
                "Does college accept JEE score"
            ],
            "responses":[
                "To be eligible for admission to NRI Institute of Information Science and Technology (NIIST), candidates must meet specific requirements for each program. For B.Tech (undergraduate) courses, candidates must have passed the 10+2 examination with Physics, Chemistry, and Mathematics, securing at least 45% marks (40% for SC/ST/OBC) in aggregate, and admission is based on JEE Main or the institute’s entrance exam. For M.Tech (postgraduate) programs, candidates must hold a B.Tech/B.E. degree in a relevant discipline with a minimum of 50% marks (45% for SC/ST/OBC), and admission is typically through GATE or the university-level entrance exam. For the MBA program, candidates need a Bachelor’s degree in any discipline with at least 50% marks (45% for SC/ST/OBC), and selection is based on CMAT, MAT, CAT, or the institute's own exam. The institute follows government reservation policies, and specific admission procedures may vary, so candidates are encouraged to check the official website or contact the admission office for detailed and updated information."
            ]
        },
        {
            "tag": "hours",
            "patterns": [
                "timing of college",
                "what is college timing",
                "working days",
                "when are you guys open",
                "what are your hours",
                "hours of operation",
                "when is the college open",
                "college timing",
                "what about college timing",
                "is college open on saturday",
                "tell something about college timing",
                "what is the college  hours",
                "when should i come to college",
                "when should i attend college",
                "what is my college time",
                "college timing",
                "timing college"
            ],
            "responses": [
                "College is open 9am-4:25pm Monday-Friday!"
            ],
            "context_set": ""
        },
        {
            "tag": "number",
            "patterns": [
                "more info",
                "contact info",
                "how to contact college",
                "college telephone number",
                "college number",
                "What is your contact no",
                "Contact number?",
                "how to call you",
                "College phone no?",
                "how can i contact you",
                "Can i get your phone number",
                "how can i call you",
                "phone number",
                "phone no",
                "call"
            ],
            "responses": [
                "You can contact at: 0755-4085500, 0755-2529059, contactus@nrigroupindia.com"
            ],
            "context_set": ""
        },

        {
            "tag": "location",
            "patterns": [
                "where is the college located",
                "college is located at",
                "where is college",
                "where is college located",
                "address of college",
                "how to reach college",
                "college location",
                "college address",
                "wheres the college",
                "how can I reach college",
                "whats is the college address",
                "what is the address of college",
                "address",
                "location"
            ],
            "responses": [
                "NRI Institute of Information Science and Technology (NIIST) is located in Bhopal, the capital city of Madhya Pradesh, India, near the T.T. Nagar area. The exact address is Near T.T. Nagar, Bhopal, Madhya Pradesh - 462003, India. Bhopal is well-connected by road, rail, and air, making it easily accessible from various parts of the country. The city offers a blend of modern and historical charm, with its lakes, educational institutions, and serene atmosphere providing a great environment for academic and personal development."
            ],
            "context_set": ""
        },
        {
            "tag": "hostel",
            "patterns": [
                "hostel facility",
                "hostel servive",
                "hostel location",
                "hostel address",
                "hostel facilities",
                "hostel fees",
                "Does college provide hostel",
                "Is there any hostel",
                "Where is hostel",
                "do you have hostel",
                "do you guys have hostel",
                "hostel",
                "hostel capacity",
                "what is the hostel fee",
                "how to get in hostel",
                "what is the hostel address",
                "how far is hostel from college",
                "hostel college distance",
                "where is the hostel",
                "how big is the hostel",
                "distance between college and hostel",
                "distance between hostel and college"
            ],
            "responses": [
                "Our college has an an campus, with Wi-Fi enabled Boys' hostel and Girls hostel with capacity to accommodate 444 students (Boys: 276 and Girls: 168) - Fully furnished hostel rooms with attached bathroom, hot water facility through Solar System Health care facility and Professional Counselor for students"
            ],
            "context_set": ""
        },
        {
            "tag": "event",
            "patterns": [
                "events organised",
                "list of events",
                "list of events organised in college",
                "list of events conducted in college",
                "What events are conducted in college",
                "Are there any event held at college",
                "Events?",
                "functions",
                "what are the events",
                "tell me about events",
                "what about events"
            ],
            "responses": [
                "For event detail visit <a target=\"_blank\" href=\"https://www.instagram.com/nrigroupindia/\" rel=\"noopener noreferrer\"> here</a>"
            ],
            "context_set": ""
        },
        {
            "tag": "document",
            "patterns": [
                "document to bring",
                "documents needed for admision",
                "documents needed at the time of admission",
                "documents needed during admission",
                "documents required for admision",
                "documents required at the time of admission",
                "documents required during admission",
                "What document are required for admission",
                "Which document to bring for admission",
                "documents",
                "what documents do i need",
                "what documents do I need for admission",
                "documents needed"
            ],
            "responses": [
                "The documents that are required for the admission process are : Passport size Photograph, 10th and 12th marksheet, Domicile Certificate, Caste Certificate, Caste Validity(only if the candidate belongs to SC, ST or OBC), Income Certificate "
            ],
            "context_set": ""
        },
        {
            "tag": "floors",
            "patterns": [
                "size of campus",
                "building size",
                "How many floors does college have",
                "floors in college",
                "floors in college",
                "how tall is UNI's College of Engineering college building",
                "floors"
            ],
            "responses": [
                "Our College has total 3 floors "
            ],
            "context_set": ""
        },
        {
            "tag": "syllabus",
            "patterns": [
                "Syllabus for IT",
                "what is the Information Technology syllabus",
                "syllabus",
                "timetable",
                "what is IT syllabus",
                "syllabus",
                "What is next lecture"
            ],
            "responses": [
                "In first year all the branches have same academic cirricular. The subject in first year are : Engg. Mathematics-I, Engg. Mathematics-II, Engg. Physics, Engg. Chemistry, Engg. Mechanics, Basic Electrical Engg., Basic Electronics Engg., Engg. Graphics, System in Mechanical Engg., Programming and Problem Solving."
            ],
            "context_set": ""
        },
        {
            "tag": "library",
            "patterns": [
                "is there any library",
                "library facility",
                "library facilities",
                "do you have library",
                "does the college have library facility",
                "college library",
                "where can i get books",
                "book facility",
                "Where is library",
                "Library",
                "Library information",
                "Library books information",
                "Tell me about library",
                "how many libraries"
            ],
            "responses": [
                "There is one huge and spacious library in the college. The timings are 8 : 45 am to 5 : 30 pm and for more visit : <a target=\"blank3\" href=\"https://www.mmcoe.edu.in/index.php/campus/library\" rel=\"noopener noreferrer\">library info</a>"
            ],
            "context_set": ""
        },
        {
            "tag": "infrastructure",
            "patterns": [
                "how is college infrastructure",
                "infrastructure",
                "college infrastructure"
            ],
            "responses": [
                "Our College has Excellent Infrastructure. Campus is clean. Good IT Labs With Good Speed of Internet connection"
            ],
            "context_set": ""
        },
        {
            "tag": "canteen",
            "patterns": [
                "food facilities",
                "canteen facilities",
                "canteen facility",
                "is there any canteen",
                "Is there a cafetaria in college",
                "Does college have canteen",
                "Where is canteen",
                "where is cafetaria",
                "canteen",
                "Food",
                "Cafetaria"
            ],
            "responses": [
                "Our College has in-campus canteen with variety of food available"
            ],
            "context_set": ""
        },
        {
            "tag": "menu",
            "patterns": [
                "food menu",
                "food in canteen",
                "Whats there on menu",
                "what is available in college canteen",
                "what foods can we get in college canteen",
                "food variety",
                "What is there to eat?"
            ],
            "responses": [
                "Our college canteen a serve wid range of food items. So famous ones are : Vada-sambar, Idle-Vada-sambar, Alu-puri, Paneer Paratha, Fruit Mocktail and many more on menu"
            ],
            "context_set": ""
        },
        {
            "tag": "placement",
            "patterns": [
                "What is college placement",
                "Which companies visit in college",
                "What is average package",
                "companies visit",
                "package",
                "About placement",
                "placement",
                "recruitment",
                "companies"
            ],
            "responses": [
                "NRI Institute of Information Science and Technology (NIIST) has a dedicated Placement Cell that plays a crucial role in ensuring students secure jobs with top companies. The institute collaborates with leading organizations across various sectors such as IT, engineering, and management, with prominent recruiters including Infosys, Wipro, TCS, Cognizant, and HCL. To enhance employability, the placement cell offers training in skills such as resume building, interview preparation, and group discussions, along with personality development workshops. NIIST also emphasizes internships, providing students with hands-on industry experience. Additionally, the placement process includes on-campus recruitment drives, along with off-campus opportunities, where students are well-supported and guided by faculty and mentors. Through these efforts, NIIST ensures its students are job-ready and equipped to succeed in the competitive job market."
            ],
            "context_set": ""
        },
        {
            "tag": "principal",
            "patterns": [
                "what is the name of principal",
                "what is the principal name",
                "principal name",
                "Who is college principal",
                "Where is principal's office",
                "principal",
                "name of principal"
            ],
            "responses": [
                "The principal of our college is Dr.Puran Gour"
            ],
            "context_set": ""
        },
        {
            "tag": "scholarship",
            "patterns": [
                "scholarship",
                "Is scholarship available",
                "scholarship engineering",
                "available scholarships",
                "list of scholarship"
            ],
            "responses": [
                "Many government scholarships are supported by our university and college. For details and updates visit <a target=\"_blank\" https://www.tribal.mp.gov.in/mptaas\" rel=\"noopener noreferrer\">MahaDBT</a>"
            ],
            "context_set": ""
        },
        {
            "tag": "facilities",
            "patterns": [
                "What facilities college provide",
                "College facility",
                "What are college facilities",
                "facilities",
                "facilities provided"
            ],
            "responses": [
                "Our university's Engineering department provides fully AC Lab with internet connection, smart classroom, Auditorium, library,canteen"
            ],
            "context_set": ""
        },
        {
            "tag": "college intake",
            "patterns": [
                "max number of students",
                "number of seats per branch",
                "number of seats in each branch",
                "maximum number of seats",
                "maximum students intake",
                "What is college intake",
                "how many stundent are taken in each branch",
                "seat allotment",
                "seats"
            ],
            "responses": [
                "No. seats in each dept are as follows : <br>1. Information Technology - 60 <br>2. Computer Engineering - 120 <br>3.Artifical Intelligence and Data Science - 60 <br>4. Electronics and Telecommunication - 120 <br>5. Mechanical Engineering - 120 <br>6. Electrical Engineering - 60."
            ],
            "context_set": ""
        },
        {
            "tag": "uniform",
            "patterns": [
                "college dress code",
                "college dresscode",
                "what is the uniform",
                "can we wear casuals",
                "Does college have an uniform",
                "Is there any uniform",
                "uniform",
                "what about uniform",
                "do we have to wear uniform"
            ],
            "responses": [
                "Uniform includes following clothing - <br>1. Formal check Shirt <br>2. Formal Navy Blue Pants <br>3. Tie"
            ],
            "context_set": ""
        },
        
        {
            "tag": "vacation",
            "patterns": [
                "holidays",
                "when will semester starts",
                "when will semester end",
                "when is the holidays",
                "list of holidays",
                "Holiday in these year",
                "holiday list",
                "about vacations",
                "about holidays",
                "When is vacation",
                "When is holidays",
                "how long will be the vacation"
            ],
            "responses": [
                "Academic calender is given to you by your class-soordinators after you join your respective classes. That calender will properly guide you about the holidays you gonna get in your engg. journey."
            ],
            "context_set": ""
        },
        {
            "tag": "sports",
            "patterns": [
                "sports and games",
                "give sports details",
                "sports infrastructure",
                "sports facilities",
                "information about sports",
                "Sports activities",
                "please provide sports and games information"
            ],
            "responses": [
                "Our college encourages all-round development of students and hence provides sports facilities in the campus. College faclited with large playground and well equiped sports rooms to play the sports like cricket, football, volleyball, etc. College also provides a Gymmnasim facility for the students. Our college also has a separate indoor game sections where various games like chess, carmon, table tennis can be played. For more details visit<a target=\"_blank\" href=\"https://www.mmcoe.edu.in/index.php/students-corner/extra-curricular-events\" rel=\"noopener noreferrer\">extra-curricular-events</a>"
            ],
            "context_set": ""
        },
        {
            "tag": "salutaion",
            "patterns": [
                "okk",
                "okie",
                "nice work",
                "well done",
                "good job",
                "thanks for the help",
                "Thank You",
                "its ok",
                "Thanks",
                "Good work",
                "k",
                "ok",
                "okay"
            ],
            "responses": [
                "I am glad I helped you, what else you want to know?",
                "welcome, anything else i can assist you with?"
            ],
            "context_set": ""
        },
        {
            "tag": "task",
            "patterns": [
                "what can you do",
                "what are the thing you can do",
                "things you can do",
                "what can u do for me",
                "how u can help me",
                "why i should use you"
            ],
            "responses": [
                "I can answer to low-intermediate questions regarding college",
                "You can ask me questions regarding college, and i will try to answer them"
            ],
            "context_set": ""
        },
        {
            "tag": "ragging",
            "patterns": [
                "ragging",
                "is ragging practice active in college",
                "does college have any antiragging facility",
                "is there any ragging cases",
                "is ragging done here",
                "ragging against",
                "antiragging facility",
                "ragging juniors",
                "ragging history",
                "ragging incidents"
            ],
            "responses": [
                "We are Proud to tell you that our college provides ragging free environment, and we have strict rules against ragging"
            ],
            "context_set": ""
        },
        {
            "tag": "cutoff",
            "patterns": [
                "cuttof",
                "what is cutoff for the college",
                "what is niist general cutoff of the college",
                "it cutoff",
                "cs cutoff",
                "entc cutoff",
                "Mechanical cutoff",
                "electrical cutoff",
                "computer cutoff",
                "artificial intelligence cutoff",
                "aids cutoff",
                "Information Technology cutoff" 
            ],
            "responses": [
                "For MMCOE, Pune UG admissions candidates must have passed class 12th with at least 50% marks from a recognised board also valid score in JEE Main, MHT CET conducted by NTA and State Common Entrance Test Cell - Maharashtra State respectively.<br> Here are the individual cutoff list of each branch : <br> BE Mechcanical - 53.82 <br> BE Electrical - 58.71 <br> BE ENTC -93.89 <br> BE IT - 96.45 <br> BE Computer - 97.18 <br> BE AIDS - 95.56"
            ],
            "context_set": ""
        },
        {
            "tag": "Steps to complete the admission",
            "patterns": [
                "steps",
                "admission steps",
                "what are the steps of admission process",
                "admission process",
                "step by step admission procedure",
                "admission flowchart",
                "admission procedure", 
                "admission"
            ],
            "responses": [
                "Following are the steps for admission procedure : <br>Step  1 - registration of student <br>Step  2 - seat acceptance confirmation & admission form filling through ERP portal(MB205) <br>Step  3 - scrutiny & verification of documents(MB207) <br>Step  4 - fee payment through ERP portal(MB207) <br>Step  5 - online admission confirmation(MB207) <br>Step  6 - submission of documents(MB207) <br>Step  7 - allotment of CPRN(MB207) <br>Step  8 - I-card & welcome kit collection(MB207) <br>Step  9 - hostel accommodation for girls/boys(if required)(MB207) <br>Step 10 - join branchwise whatsapp group"
            ],
            "context_set": ""
        },
        {
            "tag": "faculty",
            "patterns": [
                "about faculty",
                "faculty"
        ],
            "responses": [
            "We have several esteemed faculty members in the Computer Science and Engineering department, including Prof. Santosh Nagar, Anil Sir, and Vaibhav Patel Sir. For more details about each, feel free to ask!"
        ],
        "context_set": ""
        },
        {
            "tag": "Prof. Santosh Nagar",
            "patterns": [
            "Who is Prof. Santosh Nagar?",
            "Tell me about Prof. Santosh Nagar",
            "Information about Prof. Santosh Nagar",
            "Prof. Santosh Nagar profile",
            "Santosh",
            "Santosh Nagar",
            "Santosh sir"
    ],
        "responses": [
            "Prof. Santosh Nagar is a Professor in the Computer Science and Engineering department. You can contact him via email: santosh.nagar@niitbhopal.edu.in or call at +91-XXXXXXXXXX."
    ],
    "context_set": ""
    },
        {
    "tag": "Vaibhav Patel Sir",
    "patterns": [
        "Who is Vaibhav Patel Sir?",
        "Tell me about Vaibhav Patel Sir",
        "Information about Vaibhav Patel Sir",
        "Vaibhav",
        "Vaibhav Patel",
        "Vaibhav Patel Sir profile",
        "What is Vaibhav Patel Sir's department",
        "vaibhav sir"
    ],
    "responses": [
        "Vaibhav Patel Sir is an Assistant Professor in the Computer Science and Engineering department. His email is vaibhav.patel@niitbhopal.edu.in and contact number is +91-XXXXXXXXXX."
    ],
    "context_set": ""
    },
        {
    "tag": "Anil Sir",
    "patterns": [
        "Who is Anil Sir?",
        "Tell me about Anil Sir",
        "Information about Anil Sir",
        "Details about Anil Sir",
        "Anil",
        "Anil Sir profile",
        "Anil sir"
    ],
    "responses": [
        "Anil Sir is an Associate Professor in the Computer Science and Engineering department. You can contact him via email: anil.sir@niitbhopal.edu.in or call at +91-XXXXXXXXXX."
    ],
    "context_set": ""
    },{
    "tag": "Anurag Shrivastava",
    "patterns": [
        "Who is Anurag Shrivastava?",
        "Tell me about Anurag Shrivastava",
        "Information about Anurag Shrivastava",
        "Details about Anurag Shrivastava",
        "Anurag Shrivastava",
        "HOD profile",
        "HOD Anurag Shrivastava",
        "hod sir",
        "hod"
    ],
    "responses": [
        "Anurag Shrivastava is the Head of the Department in the Computer Science and Engineering department. You can contact him via email: anurag.shirvastav@niitbhopal.edu.in or call at +91-XXXXXXXXXX."
    ],
    "context_set": ""
    },

    {
    "tag": "fee submission",
    "patterns": [
        "Where can I submit my fees",
        "How do I submit my fees",
        "Where to pay the fees",
        "Fee submission details",
        "How to pay fees",
        "Fee payment procedure",
        "pay fees"
    ],
    "responses": [
        "You can submit your fees through the online payment portal available on the official website of NIIT Bhopal: <a href='http://www.niitbhopal.edu.in/fees' target='_blank'>Fee Submission Portal</a>. Alternatively, you can contact the Accounts Department at accounts@niitbhopal.edu.in or call at +91-XXXXXXXXXX for further assistance."
    ],
    "context_set": ""
    },
    {
    "tag": "fees",
    "patterns": [
        "information about fee",
        "information on fee",
        "tell me the fee",
        "college fee",
        "fee per semester",
        "what is the fee of each semester",
        "what is the fees of each year",
        "what is fee",
        "what is the fees",
        "how much is the fees",
        "fees for first year",
        "fees",
        "about the fees",
        "tell me something about the fees",
        "What is the fees of hostel",
        "hostel fees",
        "fees for AC room",
        "fees for non-AC room",
        "fees for AC room for girls",
        "fees for non-AC room for girls",
        "fees for AC room for boys",
        "fees for non-AC room for boys"
    ],
    "responses": [
        "The fee structure at NRI Institute of Information Science and Technology (NIIST) varies by program and other factors. For the B.Tech program, the tuition fee is approximately ₹60,000 to ₹80,000 per semester, with additional charges for registration, examinations, library, and development, totaling around ₹10,000 to ₹20,000 per semester. Hostel fees are around ₹30,000 to ₹40,000 per year, and mess charges range from ₹20,000 to ₹30,000 annually. For the M.Tech program, tuition fees are approximately ₹70,000 to ₹90,000 per semester, with similar additional charges and hostel/mess fees as B.Tech. The MBA program has a tuition fee of ₹60,000 to ₹80,000 per semester, with additional fees of ₹10,000 to ₹15,000 per semester. Hostel and mess charges for MBA students are also in the range of ₹30,000 to ₹40,000 per year for the hostel and ₹20,000 to ₹30,000 per year for the mess. The fees may vary slightly each academic year, so it is advisable for students to confirm the exact amounts from the official website or admission office."
    ],
    "context_set": ""
    },
    
    {
    "tag": "fee_submission",
    "patterns": [
        "Where can I pay my fees?",
        "How do I pay my tuition fees?",
        "Fee submission online",
        "How can I pay my fees online?",
        "Where is the fee portal?",
        "How to pay tuition fees?",
        "Online fee payment process",
        "Where to submit fees?"
    ],
    "responses": [
        "You can submit your fees through the online payment portal available on the official website of NIIST Bhopal: <a href='http://www.niitbhopal.edu.in/fees' target='_blank'>Fee Submission Portal</a>. Alternatively, you can contact the Accounts Department at accounts@niitbhopal.edu.in or call at 0755-2529059 for further assistance."
    ],
    "context_set": ""
    },
    {
    "tag": "course",
    "patterns": [
        "What courses do you offer?",
        "List of courses offered",
        "What are the branches available?",
        "Tell me about the courses",
        "Courses available at NIIST",
        "What are the engineering branches at NIIST?",
        "Branches offered by NIIST",
        "Programs available in your college",
        "What engineering courses are there?",
        "Engineering streams at NIIST",
        "Does your college offer AI?",
        "Is Computer Science available?",
        "Is Mechanical Engineering offered?",
        "Tell me the courses",
        "Available branches at NIIST"
    ],
    "responses": [
        "Our college offers the following courses: <br>1. Information Technology <br>2. Computer Science and Engineering <br>3. Mechanical Engineering <br>4. Electrical Engineering <br>5. Electronics and Telecommunication Engineering <br>6. Artificial Intelligence and Data Science Engineering."
    ],
    "context_set": ""
    },
    {
    "tag": "fee_submission",
    "patterns": [
        "Where can I pay my fees?",
        "How do I submit my fees?",
        "Tell me the fee submission process",
        "Where is the fee payment portal?",
        "Fee payment process",
        "How to pay fees?",
        "Online fee payment process",
        "Where to pay fees?",
        "Where can I submit my fees?",
        "How do I pay my college fees?",
        "Is there an online portal for fee submission?",
        "What is the fee payment procedure?",
        "Can I submit my fees online?"
    ],
    "responses": [
        "You can submit your fees through the online payment portal available on the official website of NIIST Bhopal: <a href='http://www.niitbhopal.edu.in/fees' target='_blank'>Fee Submission Portal</a>. You can also visit the Accounts Department in person or contact them at accounts@niitbhopal.edu.in or call 0755-2529059 for further assistance."
    ],
    "context_set": ""
}











];

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    chatLi.innerHTML = `<p>${message}</p>`;
    return chatLi;
};

const generateResponse = (userMessage) => {
    let response = "I didn't understand that. Could you clarify?";
    for (const intent of intents) {
        if (intent.patterns.some(pattern => userMessage.toLowerCase().includes(pattern.toLowerCase()))) {
            response = intent.responses[Math.floor(Math.random() * intent.responses.length)];
            break;
        }
    }
    const responseLi = createChatLi(response, "incoming");
    setTimeout(() => {
        chatbox.appendChild(responseLi);
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);
};

const handleChat = () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = '';
    chatbox.scrollTop = chatbox.scrollHeight;

    chatInput.style.height = `${inputInitHeight}px`;

    const thinkingLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(thinkingLi);
    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {
        chatbox.removeChild(thinkingLi);
        generateResponse(userMessage);
    }, 1000);
};

chatInput.addEventListener('input', () => {
    chatInput.style.height = 'auto';
    chatInput.style.height = `${Math.min(chatInput.scrollHeight, maxHeight)}px`;
});

chatInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener('click', handleChat);
