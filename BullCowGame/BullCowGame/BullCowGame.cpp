// BullCowGame.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <iostream>
#include "string"

using namespace std;

void PrintIntro();
string GetGuessAndPrintBack();



int main()
{
	

	PrintIntro();
	
	GetGuessAndPrintBack();

    return 0;
}

void PrintIntro() {
	constexpr int WORD_LENGTH = 9;

	cout << "Welcome to Bulls and Cows" << endl;
	cout << "Can you guess the " << WORD_LENGTH << " letter isogram i'm thinking of?\n";
	return;
}

string GetGuessAndPrintBack() {
	string Guess = "";
	//get guess from player
	cout << "Enter your guess: ";
	getline(cin, Guess);

	cout << "Your guess was: " << Guess << endl;
	return Guess;
}
