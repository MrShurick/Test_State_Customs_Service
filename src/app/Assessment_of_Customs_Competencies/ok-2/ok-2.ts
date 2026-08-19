import { Component, ElementRef, inject, OnInit, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import { Service } from '../../services/service/service';
import { Router } from '@angular/router';
import { IQuestion, TCustomsTestData } from '../../services/interface/interfaceType';
import { take } from 'rxjs';

@Component({
  selector: 'app-ok-2',
  imports: [],
  templateUrl: './ok-2.html',
  styleUrl: './ok-2.scss',
})
export class Ok2 {
  private service = inject(Service);
  private router = inject(Router);

  public questions = signal<IQuestion[]>([]);
  public selectedAnswers = signal<Record<number, string>>({});
  public questInd = signal(0);
  public isAnimate = signal(false);

  ngOnInit(): void {
    this.service.getTest().pipe(
      take(1)
    ).subscribe((datas: TCustomsTestData) => {
      for (const catagoryKey in datas) {
        const subCatagory = datas[catagoryKey];

        if (typeof subCatagory === 'object' && subCatagory !== null && !Array.isArray(subCatagory)) {
          const typedSubCatagor = subCatagory as unknown as Record<string, IQuestion[]>;
          const constitKey = Object.keys(typedSubCatagor).find(key => key.match(/ОК[- ]?2\b/i));

          if (constitKey && Array.isArray(typedSubCatagor[constitKey])) {
            this.questions.set(typedSubCatagor[constitKey]);
            break;
          }
        }
      }
    });
  }

  public back(): void {
    this.router.navigate(['/home']);
  }

  public onRadioClic(event: MouseEvent, questionIndex: number, option: string): void {
    const currentAnswer = this.selectedAnswers()[questionIndex];

    if (currentAnswer === option) {
      event.preventDefault();
      this.selectedAnswers.update(answers => {
        const updated = { ...answers };
        delete updated[questionIndex];
        return updated;
      });
    } else {
      this.selectedAnswers.update(answers => ({
        ...answers,
        [questionIndex]: option
      }));
    }
  }

  public isCorrectAnswer(test: IQuestion, questionIndex: number, option: string): boolean {
    const selected = this.selectedAnswers()[questionIndex];
    const correctAnswer = test.correct_answer; 
    return selected === option && option === correctAnswer;
  }

  public isQuestAnswerCott(questIn: number, test: IQuestion): boolean {
    const select = this.selectedAnswers()[questIn];
    return select === test.correct_answer;
  }
  
  public nextOffer(): void {
    if (this.isAnimate()) return;

    if (this.questInd() < this.questions().length - 1) {

      this.isAnimate.set(true);

      this.questInd.update(i => i + 1);

      this.scrollToActive(this.questInd());

      setTimeout(() => this.isAnimate.set(false), 500);
    }
  }

  public backOffer(): void {
    if (this.isAnimate()) return;

    if (this.questInd() > 0) {

      this.isAnimate.set(true);

      this.questInd.update(i => i - 1);

      this.scrollToActive(this.questInd());

      setTimeout(() => this.isAnimate.set(false), 500);
    }
  }

  public selectQuestionIndex(index: number): void {
    if (this.isAnimate()) return;
    this.questInd.set(index);
    this.scrollToActive(index);
}

  public get currentQuestion(): IQuestion | undefined {
    return this.questions()[this.questInd()] || undefined;
  }

  @ViewChild('numbContainer') numbContainer!: ElementRef;
  @ViewChildren('numItem') numItems!: QueryList<ElementRef>;

  public scrollToActive(index: number) {
    const itemsArray = this.numItems.toArray();
    if (itemsArray[index]) {
      itemsArray[index].nativeElement.scrollIntoView({
        behavior: 'smooth' as ScrollBehavior,
        inline: 'nearest',
        block: 'nearest'
      })
    }
  }
}
