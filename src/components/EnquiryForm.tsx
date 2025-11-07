"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form validation schema
const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[0-9]{10,15}$/, "Please enter a valid phone number (10-15 digits)"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  materialType: z.string().optional(),
  serviceType: z.string().optional(),
  quantity: z.string().optional(),
  projectType: z.string().optional(),
  deliveryLocation: z.string().min(5, "Please provide a delivery location"),
  message: z.string().optional(),
}).refine((data) => {
  if (data.inquiryType === "materials" || data.inquiryType === "both") {
    return data.materialType && data.materialType.length > 0;
  }
  return true;
}, {
  message: "Please select a material type",
  path: ["materialType"],
}).refine((data) => {
  if (data.inquiryType === "services" || data.inquiryType === "both") {
    return data.serviceType && data.serviceType.length > 0;
  }
  return true;
}, {
  message: "Please select a service type",
  path: ["serviceType"],
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

export default function EnquiryForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
  });

  const inquiryType = watch("inquiryType");

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We'll get back to you within 24 hours.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry" className="section-container bg-gray-50" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">
          Get a <span className="text-construction-orange">Quote</span>
        </h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Fill out the form below and our team will contact you with a competitive quote 
          tailored to your specific requirements.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="label-text">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className={`input-field ${errors.name ? "border-red-500" : ""}`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="error-text">{errors.name.message}</p>
            )}
          </div>

          {/* Email and Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="label-text">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className={`input-field ${errors.email ? "border-red-500" : ""}`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="error-text">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="label-text">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                className={`input-field ${errors.phone ? "border-red-500" : ""}`}
                placeholder="1234567890"
              />
              {errors.phone && (
                <p className="error-text">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Inquiry Type */}
          <div>
            <label htmlFor="inquiryType" className="label-text">
              Inquiry Type <span className="text-red-500">*</span>
            </label>
            <select
              id="inquiryType"
              {...register("inquiryType")}
              className={`input-field ${errors.inquiryType ? "border-red-500" : ""}`}
            >
              <option value="">Select Inquiry Type</option>
              <option value="materials">Materials (Trade Platform)</option>
              <option value="services">Services (InfraCons)</option>
              <option value="both">Both Materials & Services</option>
            </select>
            {errors.inquiryType && (
              <p className="error-text">{errors.inquiryType.message}</p>
            )}
          </div>

          {/* Material Fields - Show if Materials or Both */}
          {(inquiryType === "materials" || inquiryType === "both") && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="materialType" className="label-text">
                  Material Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="materialType"
                  {...register("materialType")}
                  className={`input-field ${errors.materialType ? "border-red-500" : ""}`}
                >
                  <option value="">Select Material</option>
                  <option value="tmt-bars">TMT Bars</option>
                  <option value="aac-blocks">AAC Blocks</option>
                  <option value="construction-cement">Construction Cement</option>
                  <option value="concrete-blocks">Concrete Blocks</option>
                  <option value="concrete-hollow-blocks">Concrete Hollow Blocks</option>
                  <option value="paver-blocks">Paver Blocks</option>
                  <option value="clay-bricks">Clay Bricks</option>
                  <option value="ash-bricks">Ash Bricks</option>
                  <option value="wire-cut-bricks">Wire Cut Red Bricks</option>
                  <option value="shuttering-plywood">Shuttering Plywood</option>
                  <option value="construction-sand">Construction Sand</option>
                  <option value="m-sand">M Sand</option>
                  <option value="ready-mix-concrete">Ready Mix Concrete</option>
                  <option value="construction-aggregates">Construction Aggregates</option>
                  <option value="hume-pipes">Hume Pipes</option>
                  <option value="ready-mix-plaster">Ready Mix Plaster</option>
                  <option value="other">Other</option>
                </select>
                {errors.materialType && (
                  <p className="error-text">{errors.materialType.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="quantity" className="label-text">
                  Quantity Required
                </label>
                <input
                  type="text"
                  id="quantity"
                  {...register("quantity")}
                  className={`input-field ${errors.quantity ? "border-red-500" : ""}`}
                  placeholder="e.g., 100 bags, 5 tons"
                />
                {errors.quantity && (
                  <p className="error-text">{errors.quantity.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Service Fields - Show if Services or Both */}
          {(inquiryType === "services" || inquiryType === "both") && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="serviceType" className="label-text">
                  Service Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceType"
                  {...register("serviceType")}
                  className={`input-field ${errors.serviceType ? "border-red-500" : ""}`}
                >
                  <option value="">Select Service</option>
                  <option value="commercial-construction">Commercial Construction</option>
                  <option value="residential-construction">Residential Construction</option>
                  <option value="infrastructure">Infrastructure Projects</option>
                  <option value="residential-interior">Residential Interior</option>
                  <option value="commercial-interior">Commercial Interior</option>
                  <option value="rmc-services">RMC Services</option>
                  <option value="other">Other Services</option>
                </select>
                {errors.serviceType && (
                  <p className="error-text">{errors.serviceType.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="projectType" className="label-text">
                  Project Type
                </label>
                <select
                  id="projectType"
                  {...register("projectType")}
                  className="input-field"
                >
                  <option value="">Select Project Type</option>
                  <option value="new-construction">New Construction</option>
                  <option value="renovation">Renovation</option>
                  <option value="extension">Extension</option>
                  <option value="repair">Repair/Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          )}

          {/* Delivery Location */}
          <div>
            <label htmlFor="deliveryLocation" className="label-text">
              Delivery Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="deliveryLocation"
              {...register("deliveryLocation")}
              className={`input-field ${errors.deliveryLocation ? "border-red-500" : ""}`}
              placeholder="Enter complete address"
            />
            {errors.deliveryLocation && (
              <p className="error-text">{errors.deliveryLocation.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="label-text">
              Additional Message (Optional)
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={4}
              className="input-field resize-none"
              placeholder="Any specific requirements or questions..."
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Enquiry"
              )}
            </button>
          </div>

          {/* Status Message */}
          {submitStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              <p className="font-medium">{submitStatus.message}</p>
            </motion.div>
          )}
        </form>
      </motion.div>
    </section>
  );
}


