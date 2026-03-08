import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function CarePathAI() {
  return (
    <>
      <Navbar />

      <main className="bg-background text-foreground">

        {/* HERO */}
        <section className="py-28 px-6 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            CarePath AI
          </h1>

          <p className="mt-6 text-xl text-muted-foreground">
            AI Infrastructure for Healthcare Navigation
          </p>

          <p className="mt-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Building the intelligence layer that helps patients and healthcare
            systems determine the appropriate next step in care.
          </p>

          <p className="mt-6 text-sm text-muted-foreground">
            Research initiative developed in collaboration with
            <br />
            <strong>Santa Clara University</strong>
          </p>

          <p className="text-sm text-muted-foreground">
            Research modeling led by
            <br />
            <strong>Dr. David C. Anastasiu</strong>
          </p>
        </section>

        {/* PROBLEM */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">The Problem</h2>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            Healthcare systems do not fail because medical expertise is unavailable.
            They often fail because patients struggle to navigate where to go first.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            When individuals experience symptoms, they frequently cannot determine:
          </p>

          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• which specialist they should consult</li>
            <li>• whether diagnostic tests are appropriate</li>
            <li>• what the correct next step in care should be</li>
          </ul>

          <p className="mt-6 text-muted-foreground">
            This uncertainty creates inefficiencies across healthcare systems.
          </p>

          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• misdirected specialist visits</li>
            <li>• unnecessary diagnostic testing</li>
            <li>• delayed escalation of care</li>
            <li>• inefficient hospital intake</li>
          </ul>
        </section>

        {/* WHY NOW */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">Why Now</h2>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            Recent advances in AI reasoning and explainable modeling make it
            increasingly possible to structure complex decision pathways that
            were previously difficult to implement.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Healthcare systems worldwide are also facing growing pressure to
            improve operational efficiency while maintaining clinical oversight.
          </p>
        </section>

        {/* SOLUTION */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">The Solution</h2>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            We are building an AI-driven clinical navigation system designed to
            structure the early stage of healthcare decision-making.
          </p>

          <p className="mt-4 text-muted-foreground">
            Instead of predicting diseases, the system models decision pathways:
          </p>

          <p className="mt-4 font-medium">
            symptom cluster → diagnostic action → specialist category
          </p>

          <ul className="mt-6 space-y-2 text-muted-foreground">
            <li>• Non-diagnostic AI</li>
            <li>• Explainable reasoning</li>
            <li>• Safety-constrained recommendations</li>
          </ul>
        </section>

        {/* RESEARCH */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">Research Collaboration</h2>

          <p className="mt-6 text-muted-foreground">
            This initiative is being developed in collaboration with
            <strong> Santa Clara University</strong>.
          </p>

          <ul className="mt-6 space-y-2 text-muted-foreground">
            <li>• uncertainty-aware AI reasoning</li>
            <li>• explainable clinical decision modeling</li>
            <li>• safety boundaries for decision-support systems</li>
          </ul>
        </section>

        {/* INFRASTRUCTURE */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">Infrastructure Potential</h2>

          <p className="mt-6 text-muted-foreground">
            The long-term objective is to develop navigation intelligence that
            functions as infrastructure within healthcare systems.
          </p>

          <ul className="mt-6 space-y-2 text-muted-foreground">
            <li>• hospital intake and triage teams</li>
            <li>• multi-specialty clinics</li>
            <li>• digital healthcare platforms</li>
          </ul>
        </section>

        {/* FOUNDER */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">Founder</h2>

          <p className="mt-6 font-semibold">Ragwa El Sayed</p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ragwa focuses on building AI infrastructure for complex real-world
            systems, particularly healthcare. Her work bridges biomedical
            engineering, AI modeling, and human-centered system design.
          </p>
        </section>

        {/* DISCLAIMER */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">Disclaimer</h2>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            This project is a research initiative exploring AI-supported
            healthcare navigation. The system does not provide medical diagnoses
            or treatment recommendations and does not replace consultation with
            licensed healthcare professionals.
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}