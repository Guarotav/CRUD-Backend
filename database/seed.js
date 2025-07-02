const db = require("./db");
const { Campus, Student } = require("./index");

const seed = async () => {
  try {
    await db.sync({ force: true }); // Recreate tables

    const campuses = await Campus.bulkCreate([
      {
        name: "Baruch College",
        address: "55 Lexington Ave, New York, NY 10010",
        description:
          "A senior college of the City University of New York (CUNY), known for business and public affairs.",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Baruch_College_Newman_Library.jpg",
      },
      {
        name: "Hunter College",
        address: "695 Park Ave, New York, NY 10065",
        description:
          "One of the oldest public colleges in the U.S., offering a broad liberal arts education.",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Hunter_College%2C_New_York.jpg",
      },
      {
        name: "New York University (NYU)",
        address: "70 Washington Square S, New York, NY 10012",
        description:
          "A prestigious private university in the heart of Manhattan, known globally for arts, business, and research.",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/61/NYU_Silver_Center_panorama.jpg",
      },
    ]);

    const students = await Student.bulkCreate([
      {
        id: 1,
        name: "Jessica Rivera",
        email: "jessica.rivera@baruch.edu",
        gpa: 3.8,
      },
      {
        id: 2,
        name: "Michael Chen",
        email: "mchen@hunter.cuny.edu",
        gpa: 3.5,
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 3,
        name: "Aaliyah Johnson",
        email: "aaliyah.j@nyu.edu",
        gpa: 3.9,
      },
      {
        id: 4,
        name: "Daniel Park",
        email: "daniel.park@hunter.cuny.edu",
        gpa: 3.2,
      },
    ]);

    await students[0].setCampus(campuses[1]);

    console.log(`🏫 Created ${campuses.length} campuses`);
    console.log(`🎓 Created ${students.length} students`);
    console.log("🌱 Seeded the database successfully");
  } catch (err) {
    console.error("❌ Error seeding the database:", err);
  } finally {
    await db.close();
  }
};

seed();