import React from "react";
import Wrapper from "./Wrapper";
import Path from "../../components/path/Path";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import CTAButton from "../../shared/CTAButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validations/contact";
import ColumnWrapper from "../../shared/ColWrapper";
import iziToast from "izitoast";

const paths = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Contact", url: "/contact" },
];

export default function Contact() {
  const defaultValues = {
    email: "",
    phone: "",
    message: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    fetch("http://localhost:4000/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      reset(defaultValues);
      iziToast.show({
        message: "Thanks for your Feedback 😁",
        backgroundColor: "#4BB543",
        messageColor: "#fff",
      });
    });
  };

  return (
    <div>
      <Path paths={paths} title="Contact" />

      <Wrapper>
        <div className="form-container">
          <small>Contact us</small>
          <h1>Be in contact</h1>
          <h3>We’d Love to Hear from You!</h3>
          <p>
            Thank you for visiting our website. Whether you have a question,
            feedback, or just want to say hello, we’re here to listen. Your
            thoughts and inquiries are important to us, and we’re committed to
            providing you with the best possible service.
          </p>
          <ColumnWrapper as="form" onSubmit={handleSubmit(onSubmit)}>
            <ColumnWrapper>
              <input
                type="email"
                {...register("email")}
                placeholder="email address"
              />
              <span>{errors.email?.message}</span>
            </ColumnWrapper>
            <ColumnWrapper>
              <input
                type="text"
                {...register("phone")}
                placeholder="phone number"
              />
              <span>{errors.phone?.message}</span>
            </ColumnWrapper>

            <ColumnWrapper>
              <textarea
                rows={15}
                {...register("message")}
                placeholder="your message"
              ></textarea>
              <span>{errors.message?.message}</span>
            </ColumnWrapper>

            <CTAButton $isUnique as="button" type="submit">
              Send
            </CTAButton>
          </ColumnWrapper>
        </div>
        <MapContainer center={[51.505, -0.09]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>Online Shopping</Popup>
          </Marker>
        </MapContainer>
      </Wrapper>
    </div>
  );
}
