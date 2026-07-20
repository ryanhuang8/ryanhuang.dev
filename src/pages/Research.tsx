import { useState } from "react";
import { useTheme } from "../components/ThemeContext";
import ResearchIntro from "../components/researchPage/ResearchIntro";
import "../styles/research.css";
import ResearchBox from "../components/researchPage/ResearchBox";
import PLMESRA from "../files/SRA Poster Ryan Huang.pdf";
import BURISE from "../files/BU_RISE_Poster2021.pptx.pdf";
// import Resume2024 from "../files/Ryan Huang Resume 2024.pdf";
// import { IoDocumentText } from "react-icons/io5";
import { usePageMeta } from "../utils/usePageMeta";

type CategoryId = "cv" | "nlp" | "experimental";

interface Category {
  id: CategoryId;
  label: string;
  heading: string;
  color: string;
}

const categories: Category[] = [
  { id: "cv", label: "Computer Vision & Graphics", heading: "Computer Vision and Graphics", color: "#3498db" },
  { id: "nlp", label: "Natural Language Processing", heading: "Natural Language Processing", color: "#72bf6a" },
  { id: "experimental", label: "Experimental", heading: "Experimental", color: "#e8bb4c" },
];

interface Entry {
  title: string;
  authors: string[];
  journal: string;
  link: string;
  category: CategoryId;
}

const publications: Entry[] = [
  {
    title: "ParSEL: Parameterized Shape Editing with Language",
    authors: ["Aditya Ganeshan, Ryan Y. Huang, Xianghao Xu, R. Kenny Jones, Daniel Ritchie"],
    journal: "ACM Transactions on Graphics (SIGGRAPH Asia 2024)",
    link: "https://dl.acm.org/doi/10.1145/3687922",
    category: "cv",
  },
  {
    title: "Generative modeling of biological shapes and images using a probabilistic α-shape sampler",
    authors: ["Emily Winn-Nuñez, Hadley Witt, Dhananjay Bhaskar, Ryan Huang, Jonathan Reichner, Ian Wong, Lorin Crawford"],
    journal: "bioRxiv preprint",
    link: "https://doi.org/10.1101/2024.01.09.574919",
    category: "cv",
  },
  {
    title: "Quantitative circular flow immunoassays with trained object recognition to detect antibodies to SARS-CoV-2 membrane glycoprotein",
    authors: ["Ryan Yuki Huang, Deron Raymond Herr"],
    journal: "Biochemical and Biophysical Research Communications",
    link: "https://doi.org/10.1016/j.bbrc.2021.05.073",
    category: "cv",
  },
  {
    title: "CafeLLM: Context-Aware Fine-Grained Semantic Clustering using Large Language Models",
    authors: ["Ryan Yuki Huang, Colin Small"],
    journal: "Springer Lecture Notes in Computer Science (GLOW @ IJCAI 2024, Best Paper Runner-Up 🏅)",
    link: "https://link.springer.com/chapter/10.1007/978-981-97-6125-8_6",
    category: "nlp",
  },
  {
    title: "Ribotyping Staphylococcus epidermidis Using Probabilistic Sequence Analysis and Levenshtein Distance Algorithm",
    authors: ["Ryan Yuki Huang, Chengye Zhang, Han Liang Lim"],
    journal: "Current Microbiology",
    link: "https://link.springer.com/article/10.1007/s00284-024-04057-1",
    category: "experimental",
  },
  {
    title: "Thoughtful Application of Artificial Intelligence Technique Improves Diagnostic Accuracy and Supportive Clinical Decision-Making",
    authors: ["Joshua Woo, Andrew Yang, Ryan Huang, Prem Ramkumar"],
    journal: "Arthroscopy: The Journal of Arthroscopic & Related Surgery",
    link: "https://doi.org/10.1016/j.arthro.2024.12.009",
    category: "experimental",
  },
  {
    title: "Mass Spectrometry Analysis of the Human Brain Sphingolipidome",
    authors: ["Xin Ying Chua, Ryan Huang, Deron Herr, Mitchell KP Lai, Markus R Wenk, Federico Torta"],
    journal: "Alzheimer’s Disease: Methods and Protocols",
    link: "https://doi.org/10.1007/978-1-0716-2655-9_12",
    category: "experimental",
  },
  {
    title: "The Gut-Skin Microbiota Axis and Its Role in Diabetic Wound Healing—A Review Based on Current Literature",
    authors: ["Patel Bharati Kadamb, Kadamb Haribhai Patel, Ryan Yuki Huang, Chuen Neng Lee, and Shabbir M. Moochhala"],
    journal: "International Journal of Molecular Sciences",
    link: "https://doi.org/10.3390/ijms23042375",
    category: "experimental",
  },
  {
    title: "Metabolomic Analysis of Skin Malodor-Associated Compounds and Structure-based Prediction of Acetolactate Synthase Selective Sulfonylurea Inhibitors",
    authors: ["Ryan Yuki Huang"],
    journal: "Research Square preprint",
    link: "https://doi.org/10.21203/rs.3.rs-1193756/v1",
    category: "experimental",
  },
  {
    title: "Circulating Antibodies to Skin Bacteria Detected by Serological Lateral Flow Immunoassays Differentially Correlated With Bacterial Abundance",
    authors: ["Ryan Yuki Huang, Chuen Neng Lee, Shabbir Moochhala"],
    journal: "Frontiers in Microbiology",
    link: "https://doi.org/10.3389/fmicb.2021.709562",
    category: "experimental",
  },
  {
    title: "Manipulation of Alcohol and Short-Chain Fatty Acids in the Metabolome of Commensal and Virulent Klebsiella pneumoniae by Linolenic Acid",
    authors: ["Ryan Yuki Huang, Deron Raymond Herr, Shabbir Moochhala"],
    journal: "Microorganisms",
    link: "https://doi.org/10.3390/microorganisms8050773",
    category: "experimental",
  },
];

const posters: Entry[] = [
  {
    title: "A Topology-Based Machine Learning Framework for Breast Cancer Subtype Classification in Histology Images",
    authors: ["Ryan Yuki Huang, Lorin Crawford"],
    journal: "Poster presented at PLME Symposium",
    link: PLMESRA,
    category: "cv",
  },
  {
    title: "The Effects of Urbanization on Soil Microbiomes: An Analysis on Mycorrhizal Fungi Biology using Genome-Scale Metabolic Modelling",
    authors: ["Ryan Yuki Huang, Kathryn Atherton, Jennifer Bhatnagar"],
    journal: "Poster presented at BU Poster Symposium",
    link: BURISE,
    category: "experimental",
  },
];

function Research() {
  const { theme } = useTheme();
  usePageMeta(
    "Research",
    "Published research and posters by Ryan Huang in computer vision, graphics, and NLP at Brown University."
  );
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);

  const colorOf = (id: CategoryId) => categories.find((c) => c.id === id)!.color;

  const renderEntry = (entry: Entry) => (
    <ResearchBox
      key={entry.title}
      title={entry.title}
      authors={entry.authors}
      journal={entry.journal}
      links={{ Link: entry.link }}
      color={colorOf(entry.category)}
    />
  );

  const visiblePosters = activeCategory
    ? posters.filter((p) => p.category === activeCategory)
    : posters;

  const isEmpty =
    publications.every((p) => activeCategory && p.category !== activeCategory) &&
    visiblePosters.length === 0;

  return (
    <div className={`container ${theme}`}>
      <div className="column">
        <ResearchIntro />
        <div className="research-subtitle">Publications</div>
        <div className="research-legend" role="group" aria-label="Filter publications by category">
          <button
            type="button"
            className={`research-legend-item ${activeCategory === null ? "active" : ""}`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`research-legend-item ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory((current) => (current === cat.id ? null : cat.id))}
              aria-pressed={activeCategory === cat.id}
            >
              <span className="research-legend-dot" style={{ backgroundColor: cat.color }}></span>
              {cat.label}
            </button>
          ))}
        </div>

        {categories.map((cat) => {
          if (activeCategory && activeCategory !== cat.id) return null;
          const entries = publications.filter((p) => p.category === cat.id);
          if (entries.length === 0) return null;
          return (
            <div key={cat.id}>
              <div className="research-subtitle2">{cat.heading}</div>
              {entries.map(renderEntry)}
            </div>
          );
        })}

        {visiblePosters.length > 0 && (
          <>
            <div className="research-subtitle">Posters</div>
            {visiblePosters.map(renderEntry)}
          </>
        )}

        {isEmpty && (
          <div className="research-empty">No entries in this category.</div>
        )}
        {/* <div>
          <a href={Resume2024} target="_blank">
            <div className="icon-text">
              <IoDocumentText size={24} />
              <div className="text-by-icon"></div>
            </div>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Research;
