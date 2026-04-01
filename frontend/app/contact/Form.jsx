"use client";

import { useState } from "react";
import { FiSend, FiCheckCircle } from "react-icons/fi";
import H1 from "@/components/ui/H1";
import { motion } from "motion/react";
import { post } from "@/data/api";

const inputClass =
  "w-full rounded-2xl border border-border bg-background/90 px-4 py-3 text-foreground placeholder:text-muted-foreground transition focus:outline-none focus:ring-2 focus:ring-ring";

const labelClass = "mb-1 block text-sm text-muted-foreground";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    title: "",
    knownBy: "",
    requestedServices: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitError("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!form.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^(?:\+?\d{9,15}|0\d{8,14})$/.test(form.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number.";
    }

    if (!form.title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!form.knownBy.trim()) {
      newErrors.knownBy = "This field is required.";
    }

    if (!form.requestedServices.trim()) {
      newErrors.requestedServices = "Please select a service.";
    }
    if (!form.message.trim() || form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setSubmitError("");

    try {
      const res = await post("/api/contact", form);
      if (res.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          phoneNumber: "",
          title: "",
          knownBy: "",
          requestedServices: "",
          message: "",
        });
        setErrors({});
        setTimeout(() => setSuccess(false), 4000);
      } else {
        setSubmitError(
          res.data?.message || res.error || "Something went wrong. Please try again."
        );
      }
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="contact-form mx-auto w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="card w-full rounded-3xl border border-border bg-card/95 px-6 py-8 shadow-lg sm:px-10 md:px-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <H1 title="Get in touch" />

        <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
          Fill out the form and we’ll get back to you shortly.
        </p>

        {success && (
          <motion.div
            className="mt-6 flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-5 py-3 text-sm text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <FiCheckCircle className="text-xl" />
            <span className="font-medium tracking-wide">Message sent successfully!</span>
          </motion.div>
        )}

        {submitError && (
          <p className="mt-4 text-sm text-destructive" role="alert">
            {submitError}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 pt-10">
          <div className="flex flex-col md:flex-row md:gap-6">
            {["name", "email"].map((field, index) => (
              <motion.div
                key={field}
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <label className={labelClass} htmlFor={field}>
                  {field === "email" ? "Email" : "Name"}
                </label>
                <input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  autoComplete={field === "email" ? "email" : "name"}
                  className={inputClass}
                />
                {errors[field] && (
                  <p className="mt-1 text-xs text-destructive">{errors[field]}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:gap-6">
            {["phoneNumber", "title"].map((field, index) => (
              <motion.div
                key={field}
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <label className={labelClass} htmlFor={field}>
                  {field === "phoneNumber" ? "Phone" : "Title"}
                </label>
                <input
                  id={field}
                  type={field === "phoneNumber" ? "tel" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  onKeyDown={
                    field === "phoneNumber"
                      ? (ev) => {
                          const allowedKeys = [
                            "Backspace",
                            "ArrowLeft",
                            "ArrowRight",
                            "Tab",
                            "Delete",
                            "+",
                          ];
                          if (!/[0-9]/.test(ev.key) && !allowedKeys.includes(ev.key)) {
                            ev.preventDefault();
                          }
                        }
                      : undefined
                  }
                  className={inputClass}
                  autoComplete={field === "phoneNumber" ? "tel" : "organization-title"}
                />
                {errors[field] && (
                  <p className="mt-1 text-xs text-destructive">{errors[field]}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:gap-6">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className={labelClass} htmlFor="knownBy">
                How did you know about us?
              </label>
              <select
                id="knownBy"
                name="knownBy"
                value={form.knownBy}
                onChange={handleChange}
                className={`${inputClass} bg-popover text-popover-foreground`}
              >
                <option value="">Select an option</option>
                <option value="Social Media">Social Media</option>
                <option value="Google Search">Google Search</option>
                <option value="Friend">Friend</option>
                <option value="Event">Event</option>
                <option value="Other">Other</option>
              </select>
              {errors.knownBy && (
                <p className="mt-1 text-xs text-destructive">{errors.knownBy}</p>
              )}
            </motion.div>

            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <label className={labelClass} htmlFor="requestedServices">
                Requested Services
              </label>
              <select
                id="requestedServices"
                name="requestedServices"
                value={form.requestedServices}
                onChange={handleChange}
                className={`${inputClass} bg-popover text-popover-foreground`}
              >
                <option value="">Select a service</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App">Mobile App</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Other">Other</option>
              </select>
              {errors.requestedServices && (
                <p className="mt-1 text-xs text-destructive">{errors.requestedServices}</p>
              )}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <label className={labelClass} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-destructive">{errors.message}</p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3 font-semibold tracking-wide text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.01 }}
            whileTap={{ scale: loading ? 1 : 0.99 }}
          >
            {loading ? (
              <span className="flex items-center gap-2 animate-pulse">Sending…</span>
            ) : (
              <>
                <span>Send Message</span>
                <FiSend className="text-lg" />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
