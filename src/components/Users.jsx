import { useState } from "react";
import "./Navbar.css";
import data from "./data.json";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

function Users() {
  const [users, setUsers] = useState(data.slice(0, 30));
  return (
    <div className="w-96 user flex flex-col gap-2 justify-center  sticky ">
      <div className=" ex1 w-96 h-full justify-center flex flex-col gap-4 mt-4 pt-80 pb-28  overflow-auto ">
        <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2">
          <div className="flex flex-row gap-10 ">
            <img src="frame.png" className=" mt-4 mb-2 ml-3 w-4 h-4" alt="" />
            <div className="flex gap-28 ml-2">
              <div className="ml-2">
                <p className="text-white text-2xl mt-4 ">Lokesh</p>
                <p className="text-white mb-2">Contacted</p>
              </div>
              <div>
                <img src="vect4.png" className="mt-10" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2">
          <div className="flex flex-row gap-10 ">
            <img src="frame.png" className=" mt-4 mb-2 ml-3 w-4 h-4" alt="" />
            <div className="flex gap-28 ml-2">
              <div className="ml-2">
                <p className="text-white text-2xl mt-4 ">Lokesh</p>
                <p className="text-white mb-2">Contacted</p>
              </div>
              <div>
                <img src="vect4.png" className="mt-10" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 h-24 users  mx-auto rounded-lg  flex flex-col gap-2 hover:border-2">
          <div className="">
            <Accordion
              className="w-80  users mx-auto"
              style={{ backgroundColor: "#262938" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
                <div className="flex flex-col mt-4 ml-4">
                  <p className="text-white">Lokesh</p>
                  <p className="text-white">Contacted</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>Contacted</AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className="w-80 h-24 users  mx-auto rounded-lg  flex flex-col gap-2">
          <div className="hover:border-2">
            <Accordion
              className="w-80  users mx-auto"
              style={{ backgroundColor: "#262938" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
                <div className="flex flex-col mt-4 ml-4">
                  <p className="text-white">Lokesh</p>
                  <p className="text-white">Contacted</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>Contacted</AccordionDetails>
            </Accordion>
          </div>

          <div>
            <Accordion
              className="w-80  users mx-auto"
              style={{ backgroundColor: "#262938" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
                <div className="flex flex-col mt-4 ml-4">
                  <p className="text-white">Lokesh</p>
                  <p className="text-white">Contacted</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>Contacted</AccordionDetails>
            </Accordion>
          </div>

          <div>
            <Accordion
              className="w-80  users mx-auto"
              style={{ backgroundColor: "#262938" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
                <div className="flex flex-col mt-4 ml-4">
                  <p className="text-white">Lokesh</p>
                  <p className="text-white">Contacted</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>Contacted</AccordionDetails>
            </Accordion>
          </div>

          <div>
            <Accordion
              className="w-80  users mx-auto"
              style={{ backgroundColor: "#262938" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
                <div className="flex flex-col mt-4 ml-10">
                  <p className="text-white">Lokesh</p>
                  <p className="text-white">Contacted</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>Contacted</AccordionDetails>
            </Accordion>
          </div>

          <div>
            <Accordion
              className="w-80  users mx-auto"
              style={{ backgroundColor: "#262938" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
                <div className="flex flex-col mt-4 ml-4">
                  <p className="text-white">Lokesh</p>
                  <p className="text-white">Contacted</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>Contacted</AccordionDetails>
            </Accordion>
          </div>

          <Accordion
            className="w-80  users mx-auto"
            style={{ backgroundColor: "grey" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              Accordion Demo
            </AccordionSummary>
            <AccordionDetails>hiii</AccordionDetails>
          </Accordion>

          <Accordion style={{ backgroundColor: "grey" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              Lokesh
              <br />
              Contacted
            </AccordionSummary>
            <AccordionDetails>hiii</AccordionDetails>
          </Accordion>
        </div>

        <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2">
          <div className="flex flex-row gap-10 ">
            <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
            <div className="flex gap-28 ml-2">
              <div className="ml-2">
                <p className="text-white text-2xl mt-4 ">Lokesh</p>
                <p className="text-white mb-2">Contacted</p>
              </div>
              <div>
                <img src="vect4.png" className="mt-10" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2">
          <div className="flex flex-row gap-10 ">
            <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
            <div className="flex gap-28 ml-2">
              <div className="ml-2">
                <p className="text-white text-2xl mt-4 ">Lokesh</p>
                <p className="text-white mb-2">Contacted</p>
              </div>
              <div>
                <img src="vect4.png" className="mt-10" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2">
          <div className="flex flex-row gap-10 ">
            <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
            <div className="flex gap-28">
              <div className="">
                <p className="text-white text-2xl mt-4 ">Lokesh</p>
                <p className="text-white mb-2">Contacted</p>
              </div>
              <div>
                <img src="vect4.png" className="mt-10" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 h-24 users  mx-auto rounded-lg hover:border-2 ">
          <div className="flex flex-row gap-10 ">
            <img src="frame.png" className=" mt-4 mb-2 ml-3" alt="" />
            <div className="flex gap-28">
              <div className="">
                <p className="text-white text-2xl mt-4 ">Lokesh</p>
                <p className="text-white mb-2">Contacted</p>
              </div>
              <div>
                <img src="vect4.png" className="mt-10" alt="" />
              </div>
            </div>
          </div>
        </div>

        <Accordion style={{ width: 400 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            Accordion Demo
          </AccordionSummary>
          <AccordionDetails>hiii</AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Users;
