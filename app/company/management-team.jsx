import React from "react";
import TEAM1 from "@/app/assets/company/management/team1.png";
import TEAM2 from "@/app/assets/company/management/team2.png";
import TEAM3 from "@/app/assets/company/management/team3.png";
import TEAM4 from "@/app/assets/company/management/team4.png";
import Image from "next/image";
const teams = [
  {
    user: TEAM1,
    name: "Rakesh Gupta",
    designation: "Chief Operating Officer",
  },
  {
    user: TEAM2,
    name: "Rohit Singh",
    designation: "Chief Business Officer",
  },
  {
    user: TEAM3,
    name: "Nikita Jhaveri",
    designation: "Chief Communication Officer",
  },
  {
    user: TEAM4,
    name: "Arjun Reddy",
    designation: "Chief Technical Officer",
  },
];
const ManagementTeam = () => {
  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4">
          <div className="aspect-video overflow-hidden mb-6">
            <video className="object-cover w-full" autoPlay loop controls>
              <source src={"/video.mp4"} type="video/mp4" />
            </video>
          </div>
          <div className="text-center">
            India Online Payment Service Division has decades of experience and
            key industry relationships that enable us to offer additional
            flexibility in terms of specific client requirements for growth
            purposes.
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          {teams?.length > 0 && (
            <div className="grid gap-4 lg:gap-8 grid-cols-2 md:grid-cols-4">
              {teams.map((team, index) => {
                return (
                  <div key={index} className="group text-center">
                    <div className="aspect-[20/41] overflow-hidden bg-gray-200 rounded-full">
                      <Image
                        src={team.user}
                        alt={team.name}
                        width={"auto"}
                        height={"auto"}
                        className="w-full translate-y-12 group-hover:translate-y-3 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-slate-900 text-xl lg:text-2xl font-bold mt-5 mb-2">
                      {team.name}
                    </div>
                    <div className="text-custom_orange font-medium">
                      {team.designation}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ManagementTeam;
