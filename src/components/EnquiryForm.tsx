"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form validation schema
const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
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
    <section id="enquiry" className="relative overflow-hidden bg-slate-900 w-full border-t border-white/5 py-12 md:py-20" ref={ref}>
      {/* Background Architectural Grid - Matching About/Testimonials */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex flex-col items-center gap-2 mb-4">
            <span className="text-white font-black uppercase tracking-[0.4em] text-[10px]">Technical Request</span>
            <div className="w-12 h-1 bg-construction-orange rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Get a <span className="text-construction-orange">Quote</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium leading-relaxed italic max-w-2xl mx-auto">
            Fill out the form below and our team will contact you with a competitive quote 
            tailored to your specific requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] p-6 md:p-10 border-t-[10px] border-construction-orange relative overflow-hidden"
        >
          {/* Form ID Detail - Industrial touch */}
          <div className="absolute top-3 right-6 text-[9px] font-mono font-bold text-slate-300">
            FORM ID: AC-RFQ-2026
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="md:col-span-2">
                <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">
                  Project In-charge / Name <span className="text-construction-orange">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3 text-construction-dark font-bold focus:outline-none focus:border-construction-orange transition-all placeholder:text-slate-300 text-sm ${errors.name ? "border-red-500 bg-red-50" : ""}`}
                  placeholder="Enter full name"
                />
                {errors.name && <p className="text-red-500 text-[10px] font-black uppercase mt-1.5 tracking-widest">{errors.name.message}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3 text-construction-dark font-bold focus:outline-none focus:border-construction-orange transition-all placeholder:text-slate-300 text-sm ${errors.email ? "border-red-500 bg-red-50" : ""}`}
                  placeholder="e.g., procurement@site.com"
                />
                {errors.email && <p className="text-red-500 text-[10px] font-black uppercase mt-1.5 tracking-widest">{errors.email.message}</p>}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">
                  Contact Number <span className="text-construction-orange">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className={`w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3 text-construction-dark font-bold focus:outline-none focus:border-construction-orange transition-all placeholder:text-slate-300 text-sm ${errors.phone ? "border-red-500 bg-red-50" : ""}`}
                  placeholder="10-digit mobile"
                />
                {errors.phone && <p className="text-red-500 text-[10px] font-black uppercase mt-1.5 tracking-widest">{errors.phone.message}</p>}
              </div>

              {/* Inquiry Type */}
              <div className="md:col-span-2">
                <label htmlFor="inquiryType" className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">
                  Select Inquiry Stream <span className="text-construction-orange">*</span>
                </label>
                <select
                  id="inquiryType"
                  {...register("inquiryType")}
                  className={`w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3 text-construction-dark font-bold focus:outline-none focus:border-construction-orange appearance-none transition-all text-sm ${errors.inquiryType ? "border-red-500 bg-red-50" : ""}`}
                >
                  <option value="">Select Category</option>
                  <option value="materials">Materials (Trade Platform)</option>
                  <option value="services">Services (InfraCons)</option>
                  <option value="both">Integrated Solution (Both)</option>
                </select>
                {errors.inquiryType && <p className="text-red-500 text-[10px] font-black uppercase mt-1.5 tracking-widest">{errors.inquiryType.message}</p>}
              </div>

              {/* Material Specific Fields */}
              {(inquiryType === "materials" || inquiryType === "both") && (
                <>
                  <div>
                    <label htmlFor="materialType" className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">
                      Technical Material <span className="text-construction-orange">*</span>
                    </label>
                    <select
                      id="materialType"
                      {...register("materialType")}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3 text-construction-dark font-bold focus:outline-none focus:border-construction-orange appearance-none transition-all text-sm"
                    >
                      <option value="">Select Spec</option>
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
                  </div>
                  <div>
                    <label htmlFor="quantity" className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">
                      Required Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      {...register("quantity")}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3 text-construction-dark font-bold focus:outline-none focus:border-construction-orange transition-all placeholder:text-slate-300 text-sm"
                      placeholder="e.g., 500 MT / 5000 Units"
                    />
                  </div>
                </>
              )}

              {/* Service Specific Fields */}
              {(inquiryType === "services" || inquiryType === "both") && (
                <>
                  <div>
                    <label htmlFor="serviceType" className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">
                      Specialized Service <span className="text-construction-orange">*</span>
                    </label>
                    <select
                      id="serviceType"
                      {...register("serviceType")}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3 text-construction-dark font-bold focus:outline-none focus:border-construction-orange appearance-none transition-all text-sm"
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
                  </div>
                  <div>
                    <label htmlFor="projectType" className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">
                      Work Scope
                    </label>
                    <select
                      id="projectType"
                      {...register("projectType")}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3 text-construction-dark font-bold focus:outline-none focus:border-construction-orange appearance-none transition-all text-sm"
                    >
                      <option value="">Select Scope</option>
                      <option value="new-construction">New Construction</option>
                      <option value="renovation">Renovation</option>
                      <option value="extension">Extension</option>
                      <option value="repair">Repair/Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </>
              )}

              {/* Delivery Location */}
              <div className="md:col-span-2">
                <label htmlFor="deliveryLocation" className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">
                  Site Delivery Address <span className="text-construction-orange">*</span>
                </label>
                <input
                  type="text"
                  id="deliveryLocation"
                  {...register("deliveryLocation")}
                  className={`w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3 text-construction-dark font-bold focus:outline-none focus:border-construction-orange transition-all placeholder:text-slate-300 text-sm ${errors.deliveryLocation ? "border-red-500 bg-red-50" : ""}`}
                  placeholder="Project location with landmarks"
                />
                {errors.deliveryLocation && <p className="text-red-500 text-[10px] font-black uppercase mt-1.5 tracking-widest">{errors.deliveryLocation.message}</p>}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">
                  Technical Notes / Messages
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={3}
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3 text-construction-dark font-bold focus:outline-none focus:border-construction-orange transition-all resize-none placeholder:text-slate-300 text-sm"
                  placeholder="Describe any specific technical requirements..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group bg-construction-dark hover:bg-construction-orange text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] shadow-xl transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 text-sm"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Transmitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Transmit Request 
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                )}
              </button>
            </div>

            {/* Status Message */}
            <AnimatePresence>
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`p-6 rounded-2xl font-bold text-center border-2 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border-green-200"
                      : "bg-red-50 text-red-800 border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
