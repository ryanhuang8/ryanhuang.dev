import { useTheme } from "../components/ThemeContext";
import ResearchIntro from "../components/researchPage/ResearchIntro";
import "../styles/research.css";
import ResearchBox from "../components/researchPage/ResearchBox";
import PLMESRA from "../files/SRA Poster Ryan Huang.pdf";
import BURISE from "../files/BU_RISE_Poster2021.pptx.pdf";
// import Resume2024 from "../files/Ryan Huang Resume 2024.pdf";
// import { IoDocumentText } from "react-icons/io5";

function Research() {
  const { theme } = useTheme();
  return (
    <div className={`container ${theme}`}>
      <div className="column">
        <ResearchIntro />
        <div className="research-subtitle">Publications</div>
        <div className="research-subtitle2">Computer Vision and Graphics</div>
        <ResearchBox
          title="ParSEL: Parameterized Shape Editing with Language"
          authors={[
            "Aditya Ganeshan, Ryan Y. Huang, Xianghao Xu, R. Kenny Jones, Daniel Ritchie",
          ]}
          journal="ACM Transactions on Graphics (SIGGRAPH Asia 2024)"
          links={{ Link: "https://dl.acm.org/doi/10.1145/3687922" }}
          color="#3498db"
        />
        <ResearchBox
          title="Generative modeling of biological shapes and images using a probabilistic α-shape sampler"
          authors={[
            "Emily Winn-Nuñez, Hadley Witt, Dhananjay Bhaskar, Ryan Huang, Jonathan Reichner, Ian Wong, Lorin Crawford",
          ]}
          journal="bioRxiv preprint"
          links={{ Link: "https://doi.org/10.1101/2024.01.09.574919" }}
          color="#3498db"
        />
        <ResearchBox
          title="Quantitative circular flow immunoassays with trained object recognition to detect antibodies to SARS-CoV-2 membrane glycoprotein"
          authors={["Ryan Yuki Huang, Deron Raymond Herr"]}
          journal="Biochemical and Biophysical Research Communications"
          links={{ Link: "https://doi.org/10.1016/j.bbrc.2021.05.073" }}
          color="#3498db"
        />
        <div className="research-subtitle2">Natural Language Processing</div>
        <ResearchBox
          title="CafeLLM: Context-Aware Fine-Grained Semantic Clustering using Large Language Models"
          authors={["Ryan Yuki Huang, Colin Small"]}
          journal="Springer Lecture Notes in Computer Science (GLOW @ IJCAI 2024, Best Paper Runner-Up 🏅)"
          links={{
            Link: "https://link.springer.com/chapter/10.1007/978-981-97-6125-8_6",
          }}
          color="#72bf6a"
        />
        <div className="research-subtitle2">Experimental</div>
        <ResearchBox
          title="Ribotyping Staphylococcus epidermidis Using Probabilistic Sequence Analysis and Levenshtein Distance Algorithm"
          authors={["Ryan Yuki Huang, Chengye Zhang, Han Liang Lim"]}
          journal="Current Microbiology"
          links={{ Link: "https://link.springer.com/article/10.1007/s00284-024-04057-1" }}
          color="#e8bb4c"
        />
        <ResearchBox
          title="Thoughtful Application of Artificial Intelligence Technique Improves Diagnostic Accuracy and Supportive Clinical Decision-Making"
          authors={["Joshua Woo, Andrew Yang, Ryan Huang, Prem Ramkumar"]}
          journal="Arthroscopy: The Journal of Arthroscopic & Related Surgery"
          links={{ Link: "https://doi.org/10.1016/j.arthro.2024.12.009" }}
          color="#e8bb4c"
        />
        <ResearchBox
          title="Mass Spectrometry Analysis of the Human Brain Sphingolipidome"
          authors={[
            "Xin Ying Chua, Ryan Huang, Deron Herr, Mitchell KP Lai, Markus R Wenk, Federico Torta",
          ]}
          journal="Alzheimer’s Disease: Methods and Protocols"
          links={{ Link: "https://doi.org/10.1007/978-1-0716-2655-9_12" }}
          color="#e8bb4c"
        />
        <ResearchBox
          title="The Gut-Skin Microbiota Axis and Its Role in Diabetic Wound Healing—A Review Based on Current Literature"
          authors={[
            "Patel Bharati Kadamb, Kadamb Haribhai Patel, Ryan Yuki Huang, Chuen Neng Lee, and Shabbir M. Moochhala",
          ]}
          journal="International Journal of Molecular Sciences"
          links={{ Link: "https://doi.org/10.3390/ijms23042375" }}
          color="#e8bb4c"
        />
        <ResearchBox
          title="Metabolomic Analysis of Skin Malodor-Associated Compounds and Structure-based Prediction of Acetolactate Synthase Selective Sulfonylurea Inhibitors"
          authors={["Ryan Yuki Huang"]}
          journal="Research Square preprint"
          links={{ Link: "https://doi.org/10.21203/rs.3.rs-1193756/v1" }}
          color="#e8bb4c"
        />
        <ResearchBox
          title="Circulating Antibodies to Skin Bacteria Detected by Serological Lateral Flow Immunoassays Differentially Correlated With Bacterial Abundance"
          authors={["Ryan Yuki Huang, Chuen Neng Lee, Shabbir Moochhala"]}
          journal="Frontiers in Microbiology"
          links={{ Link: "https://doi.org/10.3389/fmicb.2021.709562" }}
          color="#e8bb4c"
        />
        <ResearchBox
          title="Manipulation of Alcohol and Short-Chain Fatty Acids in the Metabolome of Commensal and Virulent Klebsiella pneumoniae by Linolenic Acid"
          authors={["Ryan Yuki Huang, Deron Raymond Herr, Shabbir Moochhala"]}
          journal="Microorganisms"
          links={{ Link: "https://doi.org/10.3390/microorganisms8050773" }}
          color="#e8bb4c"
        />
        <div className="research-subtitle">Posters</div>
        <ResearchBox
          title="A Topology-Based Machine Learning Framework for Breast Cancer Subtype Classification in Histology Images"
          authors={["Ryan Yuki Huang, Lorin Crawford"]}
          journal="Poster presented at PLME Symposium"
          links={{ Link: PLMESRA }}
          color="#3498db"
        />
        <ResearchBox
          title="The Effects of Urbanization on Soil Microbiomes: An Analysis on Mycorrhizal Fungi Biology using Genome-Scale Metabolic Modelling"
          authors={["Ryan Yuki Huang, Kathryn Atherton, Jennifer Bhatnagar"]}
          journal="Poster presented at BU Poster Symposium"
          links={{ Link: BURISE }}
          color="#e8bb4c"
        />
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
